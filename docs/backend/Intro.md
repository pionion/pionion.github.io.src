---
title: Introduction
sidebar_position: 1
---
:::tip
* make sure golang installed 
* make sure docker installed if you use docker
* script support ubuntu/mac/centos, you can build|start them yourself if you are using windows or IDE 
* script will start a daemon, save pid to ./configs and export log to ./logs
:::

| Services | Infos |  |
| ------------- | ------------- |
| [ISLB](https://github.com/pion/ion/tree/master/cmd/islb) |support load-banlance; node discovery
| [Signal](https://github.com/pion/ion/tree/master/cmd/signal)| exchange signal with sdk
| [Room](https://github.com/pion/ion/tree/master/apps/room)|business logic, such as room/peer/auth logic
| [SFU](https://github.com/pion/ion/tree/master/cmd/sfu)|WebRTC SFU Server; stream publish/subscribe; integrate [ion-sfu](https://github.com/pion/ion-sfu)

