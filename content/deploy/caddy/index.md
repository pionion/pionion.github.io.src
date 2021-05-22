---
title: 1. Deploy with caddy
weight: 5
icon: "<b>2. </b>"
---

## 1. Prepare a server

Tips: you should make sure:
* All the ports that ion needed is open on your server firewall
* All the ports that ion needed is mapped to your server if it's behind a NAT(This is not needed if your server has a  External Internet IP)
* You can config them in your cloud server provider console

## 2. Make sure all the module installed

Tips: see the "quickstart" section

## 3. How to deploy ion with caddy 

In my scene, i deploy ion with scripts

Modify the port in configs/biz.toml, change the port 5551 to 5552

```
#listen ip port
host = "0.0.0.0"
port = "5552"
```


Modify the port in configs/sfu.toml, change to server external ip:

```
# if the sfu is deployed in a DMZ between two 1-1 NAT for internal and
# external users.
nat1to1 = ["xxx.xxx.xxx.xxx"]
icelite = true
```

then restart them

## 4. Deploy canddy

### 1. Prepare a real domain which can be used online

config your domain dns to your server

### 2. Create a Caddyfile, replace `xxx.yyy` to your domain:
```
# redirect from www.xxx.yyy to https://xxx.yyy
# 这里把www.xxx.yyy重定向到https://xxx.yyy
www.xxx.yyy {
	redir https://xxx.yyy{uri}
}

# proxy for https://xxx.yyy
# 代理ion-web-app页面
xxx.yyy:443 {
    reverse_proxy localhost:8080
}


# proxy for wss://xxx.yyy:5551
# 代理信令wss://xxx.yyy:5551
xxx.yyy:5551

# i run biz on 5552, modify port in biz.toml
# 因为5551被代理使用，所以biz端口换5552
# add header for ws
reverse_proxy localhost:5552 {
    header_up Host {host}
    header_up X-Real-IP {remote_host}
    header_up X-Forwarded-For {remote_host}
    header_up X-Forwarded-Proto {scheme}
}

# caddy log
# caddy 日志配置
log {
    output file /root/caddy/caddy.log {
    	roll_size     100MiB
    	roll_keep     3
    }
    level DEBUG
}

```
### 3. run canddy as a daemon:

Install caddy, 2.0+ version

Run caddy as a daemon:
```
caddy start
```
It will download a free certificate which can by used online :)

### 4. enjoy

Now, you can use https://yourdomain to chat by ion-app-web
