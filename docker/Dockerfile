# # BUILD STEP # #
FROM node:22 AS builder
ENV CRONICLE_VERSION=0.9.134

WORKDIR /opt/cronicle
RUN curl -L -o /tmp/Cronicle-${CRONICLE_VERSION}.tar.gz https://github.com/jhuckaby/Cronicle/archive/refs/tags/v${CRONICLE_VERSION}.tar.gz
RUN tar zxvf /tmp/Cronicle-${CRONICLE_VERSION}.tar.gz -C /tmp/ && \
    mv /tmp/Cronicle-${CRONICLE_VERSION}/* . && \
    rm -rf /tmp/* && \
    yarn
COPY ./patches /tmp/patches
RUN patch -p3 < /tmp/patches/engine.patch lib/engine.js
COPY docker-entrypoint.js ./bin/


# # FINAL IMAGE # #
FROM python:3.14-alpine
ARG USERNAME=cronicle

RUN apk update --no-cache && apk add --no-cache procps curl bash nodejs
RUN addgroup ${USERNAME} && adduser ${USERNAME} -D -G ${USERNAME} --shell=/bin/bash

COPY --from=builder --chown=${USERNAME}:${USERNAME} /opt/cronicle/ /opt/cronicle/

ENV CRONICLE_foreground=1
ENV CRONICLE_echo=1
ENV CRONICLE_color=1
ENV debug_level=1
ENV HOSTNAME=main

USER cronicle
WORKDIR /opt/cronicle
RUN node bin/build.js dist && bin/control.sh setup

CMD ["node", "bin/docker-entrypoint.js"]
