FROM ubuntu:16.04

RUN useradd -m nonroot
USER nonroot
WORKDIR /frontend-example-docker
ADD . .
USER root
RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_10.x | bash && \
    apt-get install -y nodejs && \
    node -v && npm -v && npm install && \
    npm install -g serve && \
    chown nonroot ../frontend-example-docker

USER nonroot
EXPOSE 5000

ENTRYPOINT npm run build && serve -s -l 5000 dist