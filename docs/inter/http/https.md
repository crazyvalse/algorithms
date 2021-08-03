# https

- https://www.cnblogs.com/sxiszero/p/11133747.html

## http S(security)

- 浏览器
- http -> ip:80
- http -> 80 + 443 端口（https 专用端口）

> 443 端口不能改，改了就不能用了。服务器端，开启一个线程监听这个端口。

1. client 向 server 发送请求https://baidu.com，然后连接到server的443端口。
2. 服务端必须要有一套数字证书，可以自己制作，也可以向组织申请。区别就是自己颁发的证书需要客户端验证通过，才可以继续访问，而使用受信任的公司申请的证书则不会弹出提示页面，这套证书其实就是一对公钥和私钥。
3. 传送证书：这个证书其实就是公钥，只是包含了很多信息，如证书的颁发机构，过期时间、服务端的公钥，第三方证书认证机构(CA)的签名，服务端的域名信息等内容。
4. 客户端解析证书：这部分工作是由客户端的 TLS 来完成的，首先会验证公钥是否有效，比如颁发机构，过期时间等等，如果发现异常，则会弹出一个警告框，提示证书存在问题。如果证书没有问题，那么就生成一个随机值（密钥）。然后用证书对该随机值进行加密。
5. 传送加密信息，这部分传送的是用证书加密后的密钥（随机值），目的就是让服务端得到这个密钥（随机值），以后客户端和服务端的通信就可以通过这个随机值来进行加密解密了。