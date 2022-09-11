FROM node:18 AS Builder
ENV CRONICLE_VERSION=0.9.11
WORKDIR /opt/cronicle
COPY Cronicle-${CRONICLE_VERSION}.tar.gz /tmp/
RUN tar zxvf /tmp/Cronicle-${CRONICLE_VERSION}.tar.gz -C /tmp/ && \
    mv /tmp/Cronicle-${CRONICLE_VERSION}/* . && \
    rm -rf /tmp/* && \
    npm install
COPY ./patches /tmp/patches
RUN patch -p3 < /tmp/patches/engine.patch lib/engine.js
COPY docker-entrypoint.js ./bin/


FROM node:18-alpine
COPY --from=builder /opt/cronicle/ /opt/cronicle/
WORKDIR /opt/cronicle
ENV CRONICLE_foreground=1
ENV CRONICLE_echo=1
ENV CRONICLE_color=1
ENV debug_level=1
ENV HOSTNAME=main
RUN node bin/build.js dist && bin/control.sh setup
CMD ["node", "bin/docker-entrypoint.js"]