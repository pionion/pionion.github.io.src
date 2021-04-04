---
title: 3. ion-sfu
toc: true
weight: 5
---
### Features

- [x] High performance
- [x] Two-PC per peer(O(n) port usage)
- [x] Less signal exchange (some through datachannel)
- [x] Unified plan semantics
- [x] Audio/Video/Datachannel forwarding
- [x] BWE(TWCC, REMB, RR/SR)
- [x] ARQ(PLI, NACK)
- [x] Simulcast

### ☕️How to use

#### 1. Build and run by docker
---

##### 1. run Nats
```
docker pull nats
docker run -p 4222:4222 -p 6222:6222 -p 8222:8222 nats

```
check nats and redis is running
```
lsof -i:4222
```
##### 2. build ion-sfu

```
docker build -f ./docker/sfu.Dockerfile -t pionwebrtc/ion:latest-sfu .
```

##### 3. run ion-sfu
```
docker run -p 5000-5200:5000-5200/udp -p 6062:6062/tcp --network host -v $PWD/configs/sfu.toml:/configs/sfu.toml pionwebrtc/ion:latest-sfu
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
##### 2. build ion-sfu
tips: make sure you have installed golang
```
go build -o bin/sfu cmd/sfu/main.go
```
##### 3. run ion-sfu
```
./scripts/service start sfu
```
or
```
bin/sfu -c configs/sfu.toml
```
##### 4. stop ion-sfu
```
./scripts/service stop sfu
```

