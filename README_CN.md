# Docker Cronicle / 轻量计划任务

[![Docker Image](https://img.shields.io/docker/pulls/soulteary/cronicle.svg)](https://hub.docker.com/r/soulteary/cronicle)

<p style="text-align: center;">
  <a href="README.md" target="_blank">ENGLISH</a> | <a href="README_CN.md">中文文档</a>
</p>

简洁、轻量的容器计划任务方案。

![Main Screenshot](https://pixlcore.com/software/cronicle/screenshots-new/job-details-complete.png)

告别麻烦的配置和安装过程，使用容器**一键启动**你的计划任务中心。

## 容器镜像

```bash
# 使用最新版本
docker pull soulteary/cronicle
# 或者使用指定版本
docker pull soulteary/cronicle:0.9.16
```

### 当前支持版本

DockerHub: [https://hub.docker.com/r/soulteary/cronicle](https://hub.docker.com/r/soulteary/cronicle)

- [v0.9.16](https://github.com/jhuckaby/Cronicle/releases/tag/v0.9.16)
- [v0.9.11](https://github.com/jhuckaby/Cronicle/releases/tag/v0.9.11)
- [v0.9.9](https://github.com/jhuckaby/Cronicle/releases/tag/v0.9.11)
- [v0.8.62](https://github.com/jhuckaby/Cronicle/releases/tag/v0.8.62)

### 应用默认账号

应用默认的账号和密码：

- 用户账号: `admin`
- 用户密码: `admin`

## Docker 使用

初始化应用（仅需执行一次）：

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

接着，使用 Docker 启动一个将数据和日志文件持久化保存在本地的容器：

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

在浏览器中访问这个服务：http://localhost:3012

## Docker Compose 使用

初始化应用（仅需执行一次）：

```bash
docker-compose -f docker-compose.init up
```

接着，启动我们的服务：

```bash
docker-compose down && docker-compose up -d
```

在浏览器中访问这个服务：http://localhost:3012

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
