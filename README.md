# express 升级 https的demo

- https是什么
- 有什么作用
- 怎么操作

https 在 http的基础上增加





## 升级步骤

1. 生成证书

- openssl 下载安装 [windows](http://slproweb.com/products/Win32OpenSSL.html) [linux](https://www.openssl.org/) [中文手册](https://www.openssl.net.cn/)

- 新建证书文件夹，执行指令

```
// 生成服务器端私钥
$ openssl genrsa -out server.key 1024 

//生成服务端公钥
$ openssl rsa -in server.key -pubout -out server.pem
```

```
    //生成CA私钥
    $ openssl genrsa -out ca.key 1024
    //生成csr文件(填写大量信息)
    $ openssl req -new -key ca.key -out ca.csr
    //生成自签名证书
    $ openssl x509 -req -in ca.csr -signkey ca.key -out ca.crt
    //生成server.csr文件
    $ openssl req -new -key server.key -out server.csr
    //生成带有ca签名的证书
    $ openssl x509 -req -CA ca.crt -CAkey ca.key -CAcreateserial -in server.csr -out server.crt
```

> openssl 这些指令是什么意思，除了做这个还能做其他什么不？

2. 修改express入口文件


```JavaScript
const options = {
    key:fs.readFileSync('./ca/server.key'),
    cert:fs.readFileSync('./ca/server.crt')
}

```

## 原生nodejs HTTP2 升级 http2-base.js

```
openssl rsa -in server.key -text > private.pem
openssl x509 -inform PEM -in server.crt > public.pem
```

