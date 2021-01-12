FROM ubuntu:16.04

WORKDIR /anecdotes
ADD . .
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs
RUN node -v && npm -v && npm install
RUN npm run build
RUN npm install -g serve
EXPOSE 5000 

ENTRYPOINT serve -s build