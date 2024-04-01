#!/bin/bash

#  build app
npm run build

# Docker login
docker login

# Build Docker image
sudo docker build -t vite-react-app:latest .

# Run Docker container 
# docker run -p 8080:8080 vite-react-app:latest

# Tag Docker image
docker tag vite-react-app:latest diryivuze/containerizing_a_web_application:latest

# Push Docker image to Docker Hub
sudo docker push diryivuze/containerizing_a_web_application:latest

# Pull Docker image from Docker Hub
docker pull diryivuze/containerizing_a_web_application:latest

# Run Docker container with pulled image
docker run -p 8080:8080 diryivuze/containerizing_a_web_application:latest
# By Daniel-IRYIVUZE