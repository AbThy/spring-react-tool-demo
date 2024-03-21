# Spring - React - Postgres tool | example project
#### Stack
- Spring 2.7
- React 18
- PostgreSQL 14
- Docker

### Installation
##### Requirements
- Windows/Ubuntu
- Docker engine
- Docker compose

##### Steps
1. Pull the repository from `https://github.com/AbThy/spring-react-tool.git`
2. Open the root folder with terminal/powershell
3. run `docker-compose up -d` (-d for detached terminal)
4. open `http://localhost` in your browser

> **IMPORTANT NOTE:** the application is not persistent as the database gets deleted if it's docker image stops. to persist the application you should add a volume to the "db" service that maps it's data to the host computer

> Note: The frontend is currently running in development mode. An nginx based containerization is needed for production.
