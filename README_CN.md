# Docker Cronicle / 轻量计划任务

[![Docker Build](https://github.com/soulteary/docker-cronicle/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/soulteary/docker-cronicle/actions/workflows/release.yml) [![Docker Image](https://img.shields.io/docker/pulls/soulteary/cronicle.svg)](https://hub.docker.com/r/soulteary/cronicle)

<p style="text-align: center;">
  <a href="README.md" target="_blank">ENGLISH</a> | <a href="README_CN.md">中文文档</a>
</p>

简洁、轻量的容器计划任务方案，支持 x86, ARM64 和 ARMv7 架构环境。

![Main Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/job-details-complete.png)

告别麻烦的配置和安装过程，使用容器**一键启动**你的计划任务中心。

## 更新、获取应用 Docker 容器镜像

```bash
# 使用 DockerHub 最新版本
docker pull soulteary/cronicle
# 或者，使用指定版本
docker pull soulteary/cronicle:0.9.59
# 使用 GHCR 镜像
docker pull ghcr.io/soulteary/cronicle:latest
```

### 当前支持版本

DockerHub: [https://hub.docker.com/r/soulteary/cronicle](https://hub.docker.com/r/soulteary/cronicle)

- [v0.9.51](https://github.com/jhuckaby/Cronicle/releases/tag/v0.9.51)
- [v0.9.46](https://github.com/jhuckaby/Cronicle/releases/tag/v0.9.46)
- [v0.9.45](https://github.com/jhuckaby/Cronicle/releases/tag/v0.9.45)
- [v0.9.39](https://github.com/jhuckaby/Cronicle/releases/tag/v0.9.39)
- [历史版本](./HISTORY.md)

### 应用默认账号

应用默认的账号和密码：

- 用户账号: `admin`
- 用户密码: `admin`

## Docker 使用

使用非常简单，只需要一条命令：就能够通过 Docker 启动一个将数据和日志文件持久化保存在本地的容器。

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

当服务启动完毕，我们可以在浏览器中访问这个服务：http://localhost:3012

## Docker Compose 使用

使用 `compose` 启动我们的服务，同样也只需要一条命令：

```bash
docker-compose down && docker-compose up -d
```

当服务启动完毕，我们可以在浏览器中访问这个服务：http://localhost:3012

## 和 Traefik 一起使用

可以参考 `docker-compose.traefik.yml` 这个文件中的配置。

## 界面预览

首页

![Home Tab Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/home.png)

计划任务

![Schedule Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/schedule.png)

事件

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
