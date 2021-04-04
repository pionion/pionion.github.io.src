---
title: 2. From Scripts
weight: 5
icon: "<b>2. </b>"
---

## 1. Install Deps

```
./scripts/deps_inst
```

It will install all depend modules, support mac, ubuntu, centos
Check these modules installed:nats-server redis

## 2. Run deps

```
./scripts/deps start redis
./scripts/deps start nats-server
```
Check redis and nats-server running

On mac and linux, use ps:

```
ps -ef|grep -E "redis|nats"
```

## 3. Run all services

First time:

```
./scripts/all start
```

It will start all services we need

Next time:
```
./scripts/all restart
```

It will restart all services we need


## 4. Test 

Test by ion-app-web or ion-app-flutter

