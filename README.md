# Docker Cronicle

Simple and lightweight Cronicle Docker solution.

![Main Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/job-details-complete.png)

Say goodbye to troublesome configuration and installation, and start your Scheduled Task Center with One-Click.

## Docker Images

```bash
# use the latest version
docker pull soulteary/cronicle
# or specified version
docker pull soulteary/cronicle:0.9.16
```

### Supported Versions

DockerHub: https://hub.docker.com/r/soulteary/cronicle

- [v0.9.16](https://github.com/jhuckaby/Cronicle/releases/tag/v0.9.16)
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
