#!/bin/sh

today=`date +%Y%m%d`
packageName='todolist-frontend'

npm install
npm run webpack

cat ~/my_password.txt | docker login --username chengxiuluo --password-stdin

sudo docker build -t chengxiuluo/${packageName}:${today} .
sudo docker build -t chengxiuluo/${packageName}:latest .

sudo docker push chengxiuluo/todolist-frontend:${today}
sudo docker push chengxiuluo/todolist-frontend:latest
