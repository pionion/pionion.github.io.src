---
title: ion-sfu
toc: true
weight: 5
---

## Quick Start

### ☕️Running the json-rpc signaling server

If you have a local golang environment already setup, simply run

```
go build ./cmd/signal/json-rpc/main.go && ./main -c config.toml
```

If you prefer a containerized environment, you can use the included Docker image

```
docker run -p 7000:7000 -p 5000-5020:5000-5020/udp pionwebrtc/ion-sfu:latest-jsonrpc
```

### ☕️Running the grpc signaling server

If you have a local golang environment already setup, simply run

```
go build ./cmd/signal/grpc/main.go && ./main -c config.toml
```

If you prefer a containerized environment, you can use the included Docker image

```
docker run -p 50051:50051 -p 5000-5020:5000-5020/udp pionwebrtc/ion-sfu:latest-grpc
```

### ☕️Interacting with the server

To get an idea of how to interact with the ion-sfu instance, check out our [examples](examples).


