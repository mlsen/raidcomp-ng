FROM gliderlabs/alpine:edge

RUN apk --update add g++ make nodejs python && rm -rf /var/cache/apk/*

ADD ./package.json /tmp/package.json
RUN cd /tmp && npm install

RUN mkdir /application && cp -a /tmp/node_modules /application

WORKDIR /application
ADD . /application

EXPOSE 8080
