---
sidebar_position: 1
title: Quick Start
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip
* make sure installed: git make golang
* make sure docker installed if you use docker
* script support ubuntu/mac/centos, you can build|start them yourself if you are using windows or IDE 
:::

### ☕️How to use
<Tabs className="unique-tabs">
  <TabItem value="source" label="source" default>

### 1. Install dependencies

```
./scripts/deps_inst
```

It will install all depend modules, support mac, ubuntu, centos


### 2. Run services

First time:

```
./scripts/all start
```

It will start all services we need

Check services:

```
./scripts/all status
```

How to restart:
```
./scripts/all restart
```

It will restart all services we need


### 3. Chat 

```
cd examples/ion-pubsub
open index.html
open index.html

```
open two html, as pub and sub

click `join`

click `publish`

You can chat now

    
  </TabItem>
  <TabItem value="docker" label="docker">


### 1. Clone

```
git clone https://github.com/pion/ion
```

### 2. Start

```
make docker-start-services
```


### 3. Chat

```
open examples/ion-echo/index.html
```

  </TabItem>
</Tabs>
