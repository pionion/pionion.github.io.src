---
title: 3. room
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### ☕️How to use
<Tabs className="unique-tabs">
  <TabItem value="source" label="source" default>


### 1. run nats and redis
```
./scripts/deps start redis
./scripts/deps start nats-server
```
### 2. build room

```
go build -o bin/app-room apps/room/main.go
```
### 3. run room
```
bin/app-room -c configs/app-room.toml
```
or
```
./scripts/service start app-room
```
### 4. stop room
```
./scripts/service stop app-room
```
    
  </TabItem>
  <TabItem value="docker" label="docker">

### 1. run nats and redis
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
### 2. build room

```
docker build -f ./docker/app-room.Dockerfile -t pionwebrtc/ion:latest-app-room .
```

### 3. run room
```
docker run --network host -v $PWD/configs/app-room.toml:/configs/app-room.toml pionwebrtc/ion:latest-app-room
```

  </TabItem>
</Tabs>
