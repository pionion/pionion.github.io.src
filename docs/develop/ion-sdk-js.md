---
title: 2. ion-sdk-js
sidebar_position: 3
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
for example: [example](https://github.com/pion/ion-sfu/tree/master/examples))

modify these lines:
```
    <script src="yoursdkpath/ion-sdk-js/dist/ion-sdk.min.js"></script>
    <script src="yoursdkpath/ion-sdk-js/dist/json-rpc.min.js"></script>
```
or
```
    <script src="yoursdkpath/ion-sdk-js/dist/ion-connector.min.js"></script>
```
tips:replace yoursdkpath with real path

run this web app with chrome and test

