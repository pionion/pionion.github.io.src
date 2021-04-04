---
title: 1. From Docker
weight: 5
icon: "<b>2. </b>"
---

## Docker
---

## 1. Create network

Docker commands require the ionnet docker network

First run:

```
docker network create ionnet
```

## 2. Deployment

#### 1. Clone

```
git clone https://github.com/pion/ion
```

#### 2. Setup

Firstly pull images. Skip this command if you want build images locally

```
docker-compose pull
```

#### 3. Run

```
docker-compose up
```

#### 4. Expose Ports

(Skip if only exposing locally)

Ensure the following ports are exposed or forwarded.
You can find them in *.toml

```
15000-15200/udp
```
Tips:
max clients=port-range/2

make port-range bigger in production

#### 5. Chat

Head over to [Ion Web App](https://github.com/pion/ion-app-web) to bring up the front end.


