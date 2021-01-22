FROM node:alpine as frontend-build

RUN adduser -D nonroot
USER nonroot
WORKDIR /frontend
COPY /phonebook-frontend/ .
USER root
RUN npm install
RUN npm run build

FROM node:alpine
RUN adduser -D nonroot
USER nonroot
WORKDIR /backend
COPY /phonebook-backend/ .
USER root
RUN npm install && rm -rf build
USER nonroot
COPY --from=frontend-build /frontend/build /backend/build

EXPOSE 3001
ENTRYPOINT npm start