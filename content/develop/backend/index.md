---
title: 2. back-end
weight: 5
icon: "<b>2. </b>"
---
This show how to do develop ion-biz
Other services are similar

#### 1. Main
The main func did these things:
* parse command line params
* init modules
* register grpc services
* start server
```
cmd/biz/main.go
```

#### 2. Real business handle
The main business logic is here:

```
pkg/node/biz/server.go
```

* room and peer management
* signal handle like: join/leave and so on
* exchange signal with other module/service by grpc/nats
#### 3. Add/Modify your code

#### 4. Build
```
go build -o bin/biz cmd/biz/*.go
```

#### 5. Run
```
bin/biz -c configs/biz.toml
```
log print in your console

your can also use scripts to start a daemon:
```
./scripts/service start biz
```

#### 5. Test
test your code with client(web/app)

#### 6. Other services
They are the same archeture, you can replace biz with sfu/islb/avp and repeat 1~5 steps
