#!/bin/sh

#docker run -d --name todolist-frontend --restart=always -p 80:3000 todolist-frontend:cxluo

docker run -p 80:3000 --name todolist-frontend --link todolist-app:todolist -d chengxiuluo/todolist-frontend:latest