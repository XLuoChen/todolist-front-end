#!/bin/sh

#docker run -d --name todolist-frontend --restart=always -p 80:3000 todolist-frontend:cxluo

docker stop todolist-frontend

docker run -p 80:3000 --name todolist-frontend --rm -d chengxiuluo/todolist-frontend:latest