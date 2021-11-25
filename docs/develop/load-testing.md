---
title: 3. Load-Testing
sidebar_position: 14
---
This show how to do load-testing about https://github.com/pion/ion-sfu

#### 1. Prepare
* Two High performance server(cpu not shared)
    * Server A
    * Server B

#### 2. Build and run ion-sfu
* SSH login A
* Build and run ion-sfu(allrpc version)

#### 3. Build and run ion-load-tool
* SSH login B
* Build and run ion-load-tool(https://github.com/pion/ion-sdk-go in example)

#### 4. record cpu/mem usage and clients/bandwidths
* using dstat to see cpu/mem usage
* use ion-load-tool to see clients/bandwidths
```
./ion-load-tool .... | grep -E 'Clients|Band'
```

#### 5. Join and see videos with pubsub example(optional)
* open pubsub example with chrome(https://github.com/pion/ion-sfu in example)
* see fps and bandwidth from chrome://webrtc-internals

Tips:Make sure your pubsub index.html join the same session with ion-load-tool!
