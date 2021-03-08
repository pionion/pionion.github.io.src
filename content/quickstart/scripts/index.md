---
title: 2. From Scripts
weight: 5
icon: "<b>2. </b>"
---

## 1. Install Deps

```
./scripts/installDeps.sh
```

It will install all depend modules, support mac, ubuntu, centos
Check these modules installed:nats-server redis

## 2. Make Key

```
./scripts/makeKey.sh
```

It will generate key files to configs

## 3. Run

First Time

```
./scripts/allStart.sh
```

It will start all services we need

```
./scripts/allStop.sh
```

It will stop all services

```
./scripts/allRestart.sh
```

It will restart all services we need

*There is also individual module script in scripts folder, you can use them when you debug individual module*

## 4. Test 

Test by ion-app-web or ion-app-flutter

