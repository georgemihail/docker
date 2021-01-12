FROM ubuntu:16.04

WORKDIR /myproject
# Set NodeJs
RUN apt-get update && apt-get install -y curl vim
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs && node -v && npm -v
# create-react-app
RUN npx create-react-app new-react-app

ENTRYPOINT cd new-react-app/src && ls && bash && /bin/sh -c /bin/bash
