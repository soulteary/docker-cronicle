# Docker Cronicle

Simple and lightweight Cronicle Docker solution.

Say goodbye to troublesome configuration and installation, and start your Scheduled Task Center with One-Click.

## Docker Images

```bash
# use the latest version
docker pull soulteary/cronicle
# or specified version
docker pull soulteary/cronicle:0.9.11
```

### Supported Versions

DockerHub: https://hub.docker.com/r/soulteary/cronicle

- [v0.9.11](https://github.com/jhuckaby/Cronicle/releases/tag/v0.9.11)
- [v0.9.9](https://github.com/jhuckaby/Cronicle/releases/tag/v0.9.11)
- [v0.8.62](https://github.com/jhuckaby/Cronicle/releases/tag/v0.8.62)

### Default Account

default account and password:

- username: admin
- password: admin

## Docker

Init your app first (first time only).

```bash
docker run --rm -it \
        -v `pwd`/data/data:/opt/cronicle/data:rw \
        -v `pwd`/data/logs:/opt/cronicle/logs:rw \
        -v `pwd`/data/plugins:/opt/cronicle/plugins:rw \
        --hostname cronicle \
        --name cronicle \
        soulteary/cronicle \
        /opt/cronicle/bin/control.sh setup
```

Then, Start app using the Docker CLI to locally persist data and logs.

```bash
docker run \
        -v /etc/localtime:/etc/localtime:ro \
        -v /etc/timezone:/etc/timezone:ro \
        -v `pwd`/data/data:/opt/cronicle/data:rw \
        -v `pwd`/data/logs:/opt/cronicle/logs:rw \
        -v `pwd`/data/plugins:/opt/cronicle/plugins:rw \
        -p 3012:3012 \
        --hostname cronicle \
        --name cronicle \
        soulteary/cronicle
```

Access it in your browser: http://localhost:3012

## Docker Compose

Init your app first (first time only).

```bash
docker-compose -f docker-compose.init up
```

Then, Start app with simple command:

```bash
docker-compose down && docker-compose up -d
```

Access it in your browser: http://localhost:3012
