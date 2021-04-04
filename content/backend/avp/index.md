---
title: 4. ion-avp
toc: true
weight: 5
---

### ☕️How to use

#### 1. Build and run by docker
---

##### 1. run Nats
```
docker pull nats
docker run -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
```
check nats is running
```
lsof -i:4222
```
##### 2. build ion-avp

```
docker build -f ./docker/avp.Dockerfile -t pionwebrtc/ion:latest-avp .
```

##### 3. run ion-avp
```
docker run -p -p 6063:6063/tcp --network host -v $PWD/configs/avp.toml:/configs/avp.toml pionwebrtc/ion:latest-avp
```

#### 2. Build and run with source code
---

tips: 
* script support ubuntu/mac/centos, you can build|start them yourself if you are using windows or IDE 
* script will start a daemon, save pid to ./configs and export log to ./logs

##### 1. run Nats
```
./scripts/deps start nats-server
```
##### 2. build ion-avp
tips: make sure you have installed golang
```
go build -o bin/avp cmd/avp/main.go
```
##### 3. run ion-avp
```
./scripts/service start avp
```
or
```
bin/avp -c configs/avp.toml
```
##### 4. stop ion-avp
```
./scripts/service stop avp
```

