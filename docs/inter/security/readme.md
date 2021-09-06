# XSS (Cross-site scripting)

http://interview.poetries.top/docs/excellent.html#_22-1-xss

> XSS 简单点来说，就是攻击者想尽一切办法将可以执行的代码注入到网页中。

主要是分为三种：反射型、存储型、DOM-based

两大特征：

- 攻击者提交恶意代码
  - 转义
  - 小心使用 innerHtml 这类的方法
  - 小心使用 eval setTimeout 这类的方法
- 浏览器执行恶意代码
  - 使用 csp
  - 禁用内联脚本
  - 如果非要使用可以用 nonce
  - IE: X-Content-Security-Policy
  - Safari: X-Webkit-CSP
  - X-XSS-Protection
- cookie
  - httpOnly：这个属性可以防范 XSS，它会禁止 js 访问 cookie
  - secure：这个属性仅在请求为 https 的时候发送 cookie

## 防范 XSS 攻击

在 CSRF 攻击中，就 Cookie 相关的特性：

- 通常发生在第三方域名，发出跨域请求
- 冒用 cookie： 冒用被害者的登陆凭证 (cookie) 进行操作
- 方式：图片 URL、超链接、CORS、form 提交

> http 请求，会自动携带 Cookie。携带的 cookie，还是 http 请求所在域名的 cookie。

> 攻击全称不需要获取 cookie，只是在危险的网站欺骗用户去点击已登录的网站链接，利用已登录的网站的自动发送 cookie 达到目的。因为 http 请求都会带着请求目标域下的 cookie 的，向同一个服务器发请求时会带上浏览器保存的对于那个服务器的 cookie，而不管你从哪个网站向目标网站发请求

## 防范 CSRF

- samesite cookie
- 根据 referer 判断来源
- https + token + 签名
- 双重 cookie 验证

## 防范 iframe

- X-FRAME-OPTIONS SAMEORIGIN

## Origin Header

- 指示了请求来自于哪个站点。该字段指示服务器名称，并不包含任何路径；
- 该 header 用于 CORS 请求或 POST 请求；
- 字段内包含请求的域名（不包含 path 及 query）；

## referer Header

根据 HTTP 协议，在 HTTP 头中有一个字段叫 Referer，记录了该 HTTP 请求的来源地址。

- 对于 Ajax 请求，图片和 script 等资源请求，Referer 为发起请求的页面地址。
- 对于页面跳转，Referer 为打开页面历史记录的前一个页面地址。

## 鉴权

- https://juejin.cn/post/7003147063542153224?utm_source=gold_browser_extension#heading-7
