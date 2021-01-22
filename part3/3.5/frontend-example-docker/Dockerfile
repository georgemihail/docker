FROM node:14-alpine

RUN adduser -D nonroot
USER nonroot
WORKDIR /frontend-example-docker
ADD . .
USER root
RUN node -v && npm -v && npm install && \
    npm install -g serve && \
    chown nonroot ../frontend-example-docker

USER nonroot
EXPOSE 5000

ENTRYPOINT npm run build && serve -s -l 5000 dist