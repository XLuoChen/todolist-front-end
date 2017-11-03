#!/bin/sh

today=`date +%Y%m%d`
packageName='todolist-frontend'

npm install
npm run webpack

cat ~/my_password.txt | docker login --username chengxiuluo --password-stdin

docker build -t chengxiuluo/${packageName}:${today} .
docker build -t chengxiuluo/${packageName}:latest .

docker push chengxiuluo/todolist-frontend:${today}
docker push chengxiuluo/todolist-frontend:latest
