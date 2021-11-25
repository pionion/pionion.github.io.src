---
title: 2. signal
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### ☕️How to use


<Tabs className="unique-tabs">
  <TabItem value="source" label="source" default>

### 1. run nats and redis
```
./scripts/service start nats
```
### 2. build signal

```
go build -o bin/signal cmd/signal/main.go
```
### 3. run signal
```
bin/signal -c configs/signal.toml
```
or
```
./scripts/service start signal
```
### 4. stop signal
```
./scripts/service stop signal
```

    
  </TabItem>
  <TabItem value="docker" label="docker">


### 1. run nats and redis
```
docker pull nats
docker run -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
```

check nats is running

```
lsof -i:4222
```

### 3. build

```
docker build -f ./docker/signal.Dockerfile -t pionwebrtc/ion:latest-signal .
```


### 4. run
```
docker run -p 5551:5551/tcp --network host -v $PWD/configs/signal.toml:/configs/signal.toml pionwebrtc/ion:latest-signal
```

  </TabItem>
</Tabs>





