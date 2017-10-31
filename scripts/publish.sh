#!/bin/sh

today=`date +%Y%m%d`
packageName='todolist-frontend'

npm install
npm run webpack

docker build -t chengxiuluo/${packageName}:${today} .
docker build -t chengxiuluo/${packageName}:latest .

docker push chengxiuluo/todolist-frontend:${today}
docker push chengxiuluo/todolist-frontend:latest
