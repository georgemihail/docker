FROM openjdk:8-jdk

ADD . .
RUN ./mvnw package

ENTRYPOINT java -jar ./target/docker-example-1.1.3.jar