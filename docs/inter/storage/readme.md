## cookie 安全性属性

- value：如果用于保存用户登陆状态，应该将该值加密，不能使用明文的用户标识。
- http-only：不能通过 js 访问 Cookie， 减少 XSS 攻击
- secure：只能在协议为 HTTPS 的请求中携带
- same-site：规定浏览器不能在跨域请求中携带 Cookie，减少 CSRF 攻击
