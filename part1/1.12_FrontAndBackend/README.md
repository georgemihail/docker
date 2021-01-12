## Frontend and Backend

### Commands:

#### For running frontend

`docker run -p 5000:5000 frontend-example-docker`

#### For running backend

`docker run -v $(pwd)/logs.txt:/backend-example-docker/logs.txt -p 8000:8000 backend-example-docker`