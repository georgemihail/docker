FROM ubuntu:16.04

WORKDIR /frontend-example-docker
ADD . .
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs
RUN node -v && npm -v && npm install
RUN npm install -g serve
ENV API_URL=http://127.0.0.1:8000

ENTRYPOINT npm run build && serve -s -l 5000 dist