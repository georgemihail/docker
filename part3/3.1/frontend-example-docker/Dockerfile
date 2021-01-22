FROM node:14-slim

WORKDIR /frontend-example-docker
ADD . /frontend-example-docker
ENV API_URL=http://localhost:8000
EXPOSE 5000

RUN node -v && npm -v && npm install && \
    npm install -g serve


ENTRYPOINT npm run build && serve -s -l 5000 dist