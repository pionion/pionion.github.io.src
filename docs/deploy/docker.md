---
title: docker
sidebar_position: 2
---

## 1. Prepare a server

Tips: you should make sure:

* All the ports that ion needed opened on server firewall(like: 80/443(TCP) 5000(UDP) 3478(TCP/UDP)), you can find them in `configs/docker/*.toml`
* All the ports that ion needed are mapped to your server if it's behind a NAT(This is not needed if your server has a  External Internet IP)
* Hardware: 10GB+ disk, 2GB+ mem, non-shared cpu is better
* A real domain dns to your server

## 2. Make sure deps installed
* git 2.0+
* docker and docker-compose

## 3. Deploy ion with docker

Clone:
```
git clone https://github.com/pion/ion
cd ion
```

Modify configs/docker/sfu.toml, update server public ip:

```
nat1to1 = ["xxx.xxx.xxx.xxx"]
icelite = true
```
or use stun server
```
[[webrtc.iceserver]]
 urls = ["stun:stun.stunprotocol.org:3478"]
```
Run

```
docker network create ionnet
docker-compose up
```

## 4. Deploy ion-app-web with docker

```
git clone https://github.com/pion/ion-app-web
cd ion-app-web
```

Configure your domain/email in docker-compose.prod.yml

```
WWW_URL=yourdomain
ADMIN_EMAIL=yourname@yourdomain
```

Bring up docker with

```
docker network create ionnet
docker-compose -f docker-compose.prod.yml up
```

Chat:

```
https://yourdomain
```
Tips:
caddy will download free certificate automaticly

## 5. Build ion-app-flutter

Make sure your flutter is `2.0`.

- `./scripts/project_tools.sh create`

For Android/iOS

- `flutter run`

For macOS

- `flutter run -d macos`

For Web

- `flutter run -d chrome`

## 6. Chat with ion-app-flutter and ion-app-web

Put your domain(or public ip) in ion-app-flutter(first text box)

Put your room in ion-app-flutter(second text box)

Click Join 

Put your room in ion-app-web (first text box), make sure the room is same as puted in ion-app-flutter

Put your name in ion-app-web (second text box)

Click Join

Then you will see eachother on ion-app-web and ion-app-flutter
![screen](https://github.com/pionion/pionion.github.io.src/raw/master/resources/screen.jpg)



