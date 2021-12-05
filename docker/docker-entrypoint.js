#!/usr/bin/env node

const { existsSync, unlinkSync } = require('fs');
const { dirname } = require('path');
const { hostname, networkInterfaces } = require('os');
const StandaloneStorage = require('pixl-server-storage/standalone');

if (existsSync("./logs/cronicled.pid")) unlinkSync("./logs/cronicled.pid");

process.chdir(dirname(__dirname));

const config = require('../conf/config.json');

const storage = new StandaloneStorage(config.Storage, function (err) {
    if (err) throw err;

    const dockerHostName = (process.env['HOSTNAME'] || process.env['HOST'] || hostname()).toLowerCase();

    const networks = networkInterfaces();
    const [ip] = Object.keys(networks).
        filter(eth => networks[eth].
            filter(addr => addr.internal === false && addr.family === "IPv4").length).
        map(eth => networks[eth])[0];

    const data = {
        "type": "list_page",
        "items": [{ "hostname": dockerHostName, "ip": ip.address }]
    };

    const key = "global/servers/0";
    storage.put(key, data, function () {
        storage.shutdown(function () {
            console.log("Record successfully saved: " + key + "\n");
            storage.get(key, function (_, data) {
                if (storage.isBinaryKey(key)) {
                    console.log(data.toString() + "\n");
                } else {
                    console.log(((typeof (data) == 'object') ? JSON.stringify(data, null, "\t") : data) + "\n")
                }
                storage.shutdown(function () {
                    console.log("Docker Env Fixed.");
                    require('../lib/main.js');
                });
            });
        });
    });
});

