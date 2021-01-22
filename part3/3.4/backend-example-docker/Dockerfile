FROM ubuntu:16.04

RUN useradd -m nonroot
USER nonroot
WORKDIR /backend-example-docker
ADD . .
USER root

RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_10.x | bash && \
    apt-get install -y nodejs && \
    npm install && \
    chown nonroot logs.txt

USER nonroot

ENTRYPOINT npm start