# Docker Cronicle

[![Docker Image](https://img.shields.io/docker/pulls/soulteary/cronicle.svg)](https://hub.docker.com/r/soulteary/cronicle)

<p style="text-align: center;">
  <a href="README.md" target="_blank">ENGLISH</a> | <a href="README_CN.md">中文文档</a>
</p>

Simple and lightweight Cronicle Docker solution.

![Main Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/job-details-complete.png)

Say goodbye to troublesome configuration and installation, and start your Scheduled Task Center with One-Click.

## Get Latest Docker Images

```bash
# use the latest version
docker pull soulteary/cronicle
# or specified version
docker pull soulteary/cronicle:0.9.20
```

### Supported Versions

DockerHub: [https://hub.docker.com/r/soulteary/cronicle](https://hub.docker.com/r/soulteary/cronicle)

- [v0.9.20](https://github.com/jhuckaby/Cronicle/releases/tag/v0.9.20)
- [v0.9.17](https://github.com/jhuckaby/Cronicle/releases/tag/v0.9.17)
- [v0.9.16](https://github.com/jhuckaby/Cronicle/releases/tag/v0.9.16)
- [v0.9.11](https://github.com/jhuckaby/Cronicle/releases/tag/v0.9.11)
- [v0.9.9](https://github.com/jhuckaby/Cronicle/releases/tag/v0.9.11)
- [v0.8.62](https://github.com/jhuckaby/Cronicle/releases/tag/v0.8.62)

### Default Account

default account and password:

- username: `admin`
- password: `admin`

## Docker

It is very simple to use, only **one command is needed**:

you can start a container that persists `data` and `log` files locally through Docker.

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

When the service is started, we can access the service in the browser: http://localhost:3012

## Docker Compose

Using `compose` to start our service also requires **only one command**:

```bash
docker-compose down && docker-compose up -d
```

When the service is started, we can access the service in the browser: http://localhost:3012

## With Traefik

You can refer to the configuration in `docker-compose.traefik.yml` file.

## Snapshots

Home

![Home Tab Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/home.png)

Schedule

![Schedule Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/schedule.png)

Event

![Edit Event Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/edit-event.png)

![Event Timing Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/edit-event-timing.png)

![Resource Limits Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/edit-event-res-limits-new.png)

![Event History Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/event-history.png)

![Event Stats Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/event-stats.png)

![Graphs Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/event-stats-graphs.png)

![Completed Jobs Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/completed-jobs.png)

![Job In Progress Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/job-live-progress.png)

![Job Success Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/job-details-complete.png)

![Job Failed Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/job-details-error.png)

![My Account Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/my-account.png)

![Activity Log Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/admin-activity-log.png)

![API Keys Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/admin-api-keys.png)

![Editing API Key Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/admin-api-keys-edit-2.png)

![Categories Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/admin-categories.png)

![Edit Category Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/admin-category-edit.png)

![Plugins Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/admin-plugins.png)
