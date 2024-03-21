FROM maven:3.9.6-amazoncorretto-17 AS build
WORKDIR /app
COPY . .
RUN mvn package -DskipTests

FROM amazoncorretto:17-alpine-jdk
COPY --from=build /app/target/backend-tool-0.1.jar /app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]