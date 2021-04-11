---
title: 9. FAQ
weight: 5
icon: "<b>2. </b>"
---

#### 1. Key words
| key words  | full words | info |
| ------------- | ------------- | ------------- |
| RTC| Real-Time Communication| RTC system scenes: conference/live-broadcasting/voip.. 
| BIZ | Business(BIZ) signal server  | support room/peer/business logic
| ISLB | Intelligent server load balancing server| support node-discovery/load-bancing..
|[SFU](https://webrtcglossary.com/sfu/)|Selective Forwarding Unit| broadcasting media streams
|AVP|Audio video process server| Video Recoder/Audio Video Mixer/ AI Processor
|[MCU](https://webrtcglossary.com/mcu/)|Multipoint Control Unit| Audio Video Mixer and broadcasting

#### 2. WebRTC sites
| sites  | info |
| ------------- | ------------- |------------- |
|WebRTC For The Curious|https://webrtcforthecurious.com|WebRTC For The Curious is an Open Source book written for those that are always looking for more
|webrtc.org |https://webrtc.org| webrtc website
|webrtc samples|https://webrtc.github.io/samples| webrtc demos
|pion-webrtc|https://github.com/pion/webrtc|golang webrtc statck
|ion|https://github.com/pion/ion|distributed rtc system

#### 3. How to develop
* Start from the quick start page
* Learn Golang/WebRTC/SFU/Docker/GRPC/Nats/Redis if you are a backend developer
* Learn NodeJS/NPM/JS/TS if you are a frontend developer
* Learn Flutter/Android/iOS if you are a mobile/pc app developer
* Learn above all if you are full-stack developer

#### 4. How script works
* scripts follow these steps:
  * build modules from source
  * start them by nohup and save pid to file
* stop scripts follow these steps:
  * find pid from pid file
  * kill process by pid

### 5. Docker build blocked
Try add a goproxy in Dockerfile, example:

RUN GOPROXY="https://goproxy.io" CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o /biz .

### 6. "Process already started" when using scripts
That means the process didn't closed in right way, you shoud kill it by hand.
use `ps -ef|grep -E "islb|biz|sfu|avp"` to see which one is alive

### 7. How to deploy behind a nat?
Two ways:

1. set stun server in sfu.toml
```
[[webrtc.iceserver]]
urls = ["stun:stun.stunprotocol.org:3478"]
```

2. set nat1to1 in sfu.toml if you mapped WAN_IP to LAN_IP
```
[webrtc.candidates]
nat1to1 = ["your_WAN_ip"]
icelite = true
```
