#!/bin/bash
sudo docker build -t womywomwoo/sarpe-travel .
sudo docker push womywomwoo/sarpe-travel:latest

ssh womywomwoo@dev.womywomwoo.com << EOF
sudo docker pull womywomwoo/sarpe-travel:latest
sudo docker stop api-sarpetravel || true
sudo docker rm api-sarpetravel || true
sudo docker rmi womywomwoo/sarpe-travel:current || true
sudo docker tag womywomwoo/sarpe-travel:latest womywomwoo/sarpe-travel:current
sudo docker run -d --restart always --name api-sarpetravel -p 443:3000 womywomwoo/sarpe-travel:current
EOF
