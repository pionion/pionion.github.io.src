---
title: Architecture
sidebar_position: 1
---

before develop modules, you should know how it works

#### 1. Architecture
![arch](/img/arch.png)

#### 2. Signal flow
```
SDK<---grpc--->signal<---nats--->Room/ISLB<---nats--->signal<---grpc--->SDK
                                    ||
                                  [Redis]
```
* SDK send signals to Signal by grpc (example:join and so on)
* Signal do business handle and send signals/events to Room/ISLB by nats
* Signal get a SFU node from ISLB when SDK join a session
* Signal exchange SDP with SFU by nats
* SDK and SFU start ICE, send/recv video streams after ICE state is connected
* Other Signal will receive events at the same time(example:some one joined/publish stream)


#### 3. Media streams flow
```
SDK<----webrtc---->SFU<----webrtc---->SDK
```

Tips: 
* keys words see faq
* you must config stun server or nat1v1 in config.toml
