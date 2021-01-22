FROM node:14-alpine as build-frontend

RUN adduser -D nonroot
USER nonroot
WORKDIR /frontend-example-docker
ADD . .
USER root
RUN node -v && npm -v && npm install && \
    chown nonroot ../frontend-example-docker && \
    npm run build

FROM node:14-alpine
RUN adduser -D nonroot
USER nonroot
WORKDIR /backend
COPY --from=build-frontend /frontend-example-docker/dist /backend/dist
USER root
RUN npm install -g serve
EXPOSE 5000
USER nonroot
ENTRYPOINT serve -s -l 5000 dist
