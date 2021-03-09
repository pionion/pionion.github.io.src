
## 🌍ION
---
#### ION is a distributed real-time communication system, let people communicate anydevice, anytime, anywhere!


## 📖Architecture
---
![arch](https://github.com/pionion/pionion.github.io.src/raw/master/resources/logo/arch.png)

## 🖥️Modules
* BIZ --- a distributed signal server
* ISLB ---a distributed load-balance|service-discovery server
* SFU ---a distributed media stream server
* AVP ---a distributed audio|video process server
## ☕️How to work
* All modules connected to nats, exchange signals to each other through message queue
* Clients connected to BIZ, exchange [SDP](https://webrtchacks.com/sdp-anatomy) or other signals with BIZ
* BIZ will get an [SFU](https://webrtcglossary.com/sfu/) node from ISLB, exchange SDP with SFU
* Clients finally exchanged their SDP, They start [ICE](https://webrtcglossary.com/ice) now
* Clients will see videos from each other when ICE finished

## 🌟Feature
---
### Front-End Stacks
  - [x] Support almost all platforms: iOS, Android, Windows, macOS
  - [x] Support many browsers: Chrome(recommend), Firefox, Safari, Edge
  - [x] Support popular language SDKs/APPs: Flutter, TS, JS, GO, Swift
  - [x] Fast development: Flutter---one code support all platforms

---
### Back-End Stacks
  - [x] Written by pure GO, fast development
  - [x] High performance, continuous optimization
  - [x] Distributed architecture, decoupling by [nats](https://nats.io)
  - [x] Support K8s/docker, easy to scale
  - [x] Support grpc signal, easy to extend to jsonrpc
  - [x] Support webrtc stacks, base on [pion](https://github.com/pion/webrtc): NACK/PLI/TWCC/REMB/RR/SR/Simulcast/SVC






