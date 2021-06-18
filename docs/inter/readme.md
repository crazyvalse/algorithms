# 重要补充文章

- 科普一下 CORS 以及如何节省一次 OPTIONS 请求 https://zhuanlan.zhihu.com/p/70032617

## 跨域资源共享 CORS 详解

- 跨域资源共享 CORS 详解： http://www.ruanyifeng.com/blog/2016/04/cors.html

### 一、简介

- CORS 需要**浏览器**和**服务器**同时支持
- 所有浏览器都支持该功能，IE 浏览器不能低于 IE10
- 整个 CORS 通信过程，都是浏览器自动完成
- 浏览器一旦发现 AJAX 请求跨源，就会自动添加一些附加的头信息

### 二、两种请求

#### 2.1 简单请求

- 请求是以下三种方法之一
  - head
  - get
  - post
- http 的头信息不超出以下几种字段
  - Accept
  - Accept-Language
  - Content-Language
  - Last-Event-ID
  - Content-Type：只限于三个值 application/x-www-form-urlencoded、multipart/form-data、text/plain

#### 2.2 withCredentials

上面说到，CORS 请求默认不发送 Cookie 和 HTTP 认证信息。如果要把 Cookie 发到服务器，一方面要服务器同意，指定 Access-Control-Allow-Credentials 字段。

#### 2.3 非简单请求

非简单请求是那种对服务器有特殊要求的请求，比如请求方法是 PUT 或 DELETE，或者 Content-Type 字段的类型是 application/json

非简单请求的 CORS 请求，会在正式通信之前，增加一次 HTTP 查询请求，称为"预检"请求（preflight）。
