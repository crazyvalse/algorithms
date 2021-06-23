## 状态码

### 204 No Content(没有内容)

返回的 Response 中只有一些 Header 和一个状态行， 没有实体的主题内容（没有 response body）

- 在不获取资源的情况下了解资源的情况（比如判断类型）
- 通过查看 Header，查看资源是否被修改等等
- 主要是用在 cors 跨域处理中，如果遇到非简单请求，浏览器会发出，option 请求，这个时候浏览器可以把相关的 header 返回给浏览器，并标识状态码 204

### 206 Partial Content(部分内容)

206 状态码代表服务器已经成功处理了部分 GET 请求（只有发送 GET 方法的 request, web 服务器才可能返回 206）

应用场景：

1. 迅雷或者 HTTP 下载工具
2. 大文档分解为多个下载段同时下周。可以使用 206

- http 302 301 307 的区别
- 301 和 302 哪个对 seo 更友好（301）

```
打开Fiddler， 然后用浏览器打开“搜狐视频中的绿箭侠” http://tv.sohu.com/20121011/n354681393.shtml 然后你在Fiddler中就能看到一堆的206
1. 浏览器发送一个Get 方法的request. header中包含 Range: bytes=5303296-5336063. (意思就是请求得到5303296-5336063这个范围的数据)。
2. Web服务器返回一个206 的Response. header中包含Content-Range: bytes 5303296-5336063/12129376(表明这次返回的内容范围)
```

###

### keep-alive

keep-alive 机制：若开启后，在一次 http 请求中，服务器进行响应后，不再直接断开 TCP 连接，而是将 TCP 连接维持一段时间。在这段时间内，如果同一客户端再次向服务端发起 http 请求，便可以复用此 TCP 连接，向服务端发起请求，并重置 timeout 时间计数器，在接下来一段时间内还可以继续复用。这样无疑省略了反复创建和销毁 TCP 连接的损耗。

所以引入了 keep-alive 机制。http1.0 默认是关闭的，通过 http 请求头设置“connection: keep-alive”进行开启；http1.1 中默认开启，通过 http 请求头设置“connection: close”关闭。

> HTTP keep-alive 章节的实验结果：无论开启 keep-alive 与否，最终由服务端主动断开 TCP 连接。

