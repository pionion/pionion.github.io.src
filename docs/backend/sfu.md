---
title: 4. sfu
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Features

- [x] High performance
- [x] Two-PC design
- [x] Single-Port mode
- [x] Unified plan semantics
- [x] Audio/Video/Datachannel forwarding
- [x] BWE(TWCC, REMB, RR/SR)
- [x] ARQ(PLI, NACK)
- [x] Simulcast


### ☕️How to use

<Tabs className="unique-tabs">
  <TabItem value="source" label="source" default>

### 1. run nats
```
./scripts/deps start nats-server
```
### 2. build sfu

```
go build -o bin/sfu cmd/sfu/main.go
```
### 3. run sfu
```
bin/sfu -c configs/sfu.toml
```
or
```
./scripts/service start sfu
```
### 4. stop sfu
```
./scripts/service stop sfu
```
  </TabItem>
  <TabItem value="docker" label="docker">

### 1. run nats
```
docker pull nats
docker run -p 4222:4222 -p 6222:6222 -p 8222:8222 nats

```
check nats and redis is running
```
lsof -i:4222
```
### 2. build sfu

```
docker build -f ./docker/sfu.Dockerfile -t pionwebrtc/ion:latest-sfu .
```

### 3. run sfu
```
docker run -p 5000:5000/udp --network host -v $PWD/configs/sfu.toml:/configs/sfu.toml pionwebrtc/ion:latest-sfu
```

  </TabItem>
</Tabs>



