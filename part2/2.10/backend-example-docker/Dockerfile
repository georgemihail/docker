FROM ubuntu:16.04

WORKDIR /backend-example-docker
ADD . .
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs
RUN npm install

ENTRYPOINT npm start