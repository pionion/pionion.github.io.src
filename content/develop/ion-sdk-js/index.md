---
title: 3. ion-sdk-js
weight: 5
icon: "<b>2. </b>"
---
This page show how to develop ion-sdk-js

#### 1. Install nodeJS and npm
https://nodejs.org

#### 2. Add/Modify code
The main code is here
```
ion-sdk-js/src
```
written by [TS](https://www.typescriptlang.org/)

#### 4. Build
```
cd ion-sdk-js
npm i
```
you will see new sdk in:
```
ion-sdk-js/dist
```

#### 5. Test with html
import your new sdk to your web app (for example: [pubsubtest](https://github.com/pion/ion-sfu/tree/master/examples/pubsubtest))

modify these lines:
```
    <script src="yoursdkpath/ion-sdk-js/dist/ion-sdk.min.js"></script>
    <script src="yoursdkpath/ion-sdk-js/dist/json-rpc.min.js"></script>
```
tips:replace yoursdkpath with real path

run this web app with chrome and test

