---
title: 1. Architecture
weight: 5
icon: "<b>2. </b>"
---
before develop modules, you should know how it works

#### 1. Architecture
![arch](https://github.com/pionion/pionion.github.io.src/raw/master/resources/logo/arch.png)

#### 2. Signal flow
```
SDK<---grpc--->BIZ<---mq--->ISLB<---mq--->BIZ<---grpc--->SDK
                |             |            |
                |---------->Redis<---------|
```
* SDK send signals to BIZ by grpc (example:join/negotiate and so on)
* BIZ do business handle and send signals/events to BIZ/ISLB by nats
* BIZ get a SFU node from ISLB when SDK join a session
* BIZ exchange SDP with SFU by nats
* SDK and SFU start ICE, send/recv video streams after ICE state is connected
* Other BIZ will receive events at the same time(example:some one joined/publish stream)


#### 3. Media streams flow
```
SDK<----webrtc---->SFU<----webrtc---->SDK
```

Tips: keys words see faq
