---
title: 1. ion-islb
toc: true
weight: 5
---

### ☕️How to use

#### 1. Build and run by docker
---

##### 1. run Nats and Redis
```
docker pull nats
docker run -p 4222:4222 -p 6222:6222 -p 8222:8222 nats

docker pull redis
docker run -p 6379:6379 redis

```
check nats and redis is running
```
lsof -i:4222
lsof -i:6379
```
##### 2. build ion-islb

```
docker build -f ./docker/islb.Dockerfile -t pionwebrtc/ion:latest-islb .
```

##### 3. run ion-islb
```
docker run -p 6061:6061/tcp --network host -v $PWD/configs/islb.toml:/configs/islb.toml pionwebrtc/ion:latest-islb
```

#### 2. Build and run with source code
---

tips: 
* script support ubuntu/mac/centos, you can build|start them yourself if you are using windows or IDE 
* script will start a daemon, save pid to ./configs and export log to ./logs

##### 1. run Nats and Redis
```
./scripts/service start nats
./scripts/service start redis
```
##### 2. build ion-islb
tips: make sure you have installed golang
```
go build -o bin/islb cmd/islb/main.go
```
##### 3. run ion-islb
```
./scripts/service start islb
```
or
```
bin/islb -c configs/islb.toml
```
##### 4. stop ion-islb
```
./scripts/service stop islb
```

