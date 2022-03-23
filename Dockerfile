FROM node:16.14.2-alpine

ENV HOST 0.0.0.0
WORKDIR /app

RUN apk update

COPY ./src ./src
RUN cd ./src && yarn install
