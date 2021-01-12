FROM ubuntu:16.04

WORKDIR /backend-example-docker
ADD . .
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs
RUN npm install
ENV FRONT_URL=http://127.0.0.1:5000

ENTRYPOINT npm start