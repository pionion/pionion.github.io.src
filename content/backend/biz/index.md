---
title: 1. ion-biz
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

docker pull redis:6.0.9 nats
docker run -p 6379:6379 redis:6.0.9

```
check nats and redis is running
```
lsof -i:4222
lsof -i:6379
```
##### 2. build ion-biz

```
docker build -f ./docker/biz.Dockerfile -t pionwebrtc/ion:latest-biz .
```

##### 3. run ion-biz
```
docker run -p 5551:5551/tcp -p 6060:6060/tcp --network host -v $PWD/configs/biz.toml:/configs/biz.toml pionwebrtc/ion:latest-biz
```

#### 2. Build and run with source code
---

tips: 
* script support ubuntu/mac/centos, you can build|start them yourself if you are using windows or IDE 
* script will start a daemon, save pid to ./configs and export log to ./logs

##### 1. run Nats and Redis
```
./scripts/redisStart.sh
./scripts/natsStart.sh
```
##### 2. build ion-biz
tips: make sure you have installed golang
```
go build -o bin/biz cmd/biz/grpc/main.go
```
##### 3. run ion-biz
```
./scripts/bizStart.sh
```
or
```
bin/biz -c configs/biz.toml
```
##### 4. stop ion-biz
```
./scripts/bizStop.sh
```

