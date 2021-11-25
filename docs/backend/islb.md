---
title: 1. islb
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### ☕️How to use
<Tabs className="unique-tabs">
  <TabItem value="source" label="source" default>

### 1. run nats and redis
```
./scripts/service start nats
./scripts/service start redis
```
### 2. build islb

```
go build -o bin/islb cmd/islb/main.go
```
### 3. run islb
```
bin/islb -c configs/islb.toml
```
or
```
./scripts/service start islb
```
### 4. stop islb
```
./scripts/service stop islb
```

  </TabItem>
  <TabItem value="docker" label="docker">

### 1. run Nats and Redis
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
### 2. build islb

```
docker build -f ./docker/islb.Dockerfile -t pionwebrtc/ion:latest-islb .
```

### 3. run islb
```
docker run --network host -v $PWD/configs/islb.toml:/configs/islb.toml pionwebrtc/ion:latest-islb
```

  </TabItem>
</Tabs>



