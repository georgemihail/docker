# Simple button

## How to start

Make sure you have java 8 installed

Build the project with `./mvnw package`

Run with `java -jar ./target/docker-example-1.1.3.jar`

The project should open in `8080` and you get a message by pressing the button.

## Docker Commands

`docker build -t java-spring-project .`

`docker run -p8080:8080 java-spring-project`