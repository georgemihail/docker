FROM ubuntu:16.04

WORKDIR /app
ADD . /app/
ENV FRONT_URL=http://localhost:5000
EXPOSE 8000

RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_10.x | bash && \
    apt-get install -y nodejs && \
    npm install && \
    apt-get purge -y --auto-remove curl && \
    rm -rf /var/lib/apt/lists/*

ENTRYPOINT npm start