#!/bin/sh

docker stop todolist-frontend
docker rm todolist-frontend
docker rmi todolist-frontend:latest
docker load < todolist-frontend.tar
docker run -d --name todolist-frontend --restart=always -p 80:3000 todolist-frontend:latest