#!/usr/bin/env node

if(require("fs").existsSync("./data/users")) {
  console.log("Docker Env already configured.");
  require("../lib/main.js");
} else {
  const { existsSync, unlinkSync } = require("fs");
  const { dirname } = require("path");
  const { spawnSync } = require("child_process");
  const { hostname, networkInterfaces } = require("os");
  const StandaloneStorage = require("pixl-server-storage/standalone");

  if (existsSync("./logs/cronicled.pid")) unlinkSync("./logs/cronicled.pid");

  if (!existsSync("./data/users")) {
    console.log("Storage init.");
    const result = spawnSync("/opt/cronicle/bin/control.sh", ["setup"]);
    if (result.error || result.stderr.length !== 0) {
      console.log("init strorage failed");
      console.log(result.error?.message || result.stderr.toString());
      process.exit(1);
    }
    console.log(`stdout: ${result.stdout}`);
  }

  process.chdir(dirname(__dirname));

  const config = require("../conf/config.json");
  const storage = new StandaloneStorage(config.Storage, function (err) {
    if (err) throw err;
    const dockerHostName = (process.env["HOSTNAME"] || process.env["HOST"] || hostname()).toLowerCase();

    const networks = networkInterfaces();
    const [ip] = Object.keys(networks)
      .filter((eth) => networks[eth].filter((addr) => addr.internal === false && addr.family === "IPv4").length)
      .map((eth) => networks[eth])[0];

    const data = {
      type: "list_page",
      items: [{ hostname: dockerHostName, ip: ip.address }],
    };

    const key = "global/servers/0";
    storage.put(key, data, function () {
      storage.shutdown(function () {
        console.log("Record successfully saved: " + key + "\n");
        storage.get(key, function (_, data) {
          if (storage.isBinaryKey(key)) {
            console.log(data.toString() + "\n");
          } else {
            console.log((typeof data == "object" ? JSON.stringify(data, null, "\t") : data) + "\n");
          }
          storage.shutdown(function () {
            console.log("Docker Env Fixed.");
            require("../lib/main.js");
          });
        });
      });
    });
  });
}