FROM gliderlabs/alpine:edge

RUN apk --update add g++ make nodejs python && rm -rf /var/cache/apk/*

ADD ./package.json /tmp/package.json
RUN cd /tmp && npm install

RUN mkdir /application && cp -a /tmp/node_modules /application

WORKDIR /application
ADD ./src /application/src
ADD ./package.json /application/package.json
ADD ./webpack.config.js /application/webpack.config.js
ADD ./webpack.prod.config.js /application/webpack.prod.config.js

EXPOSE 8080
