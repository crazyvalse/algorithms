# 性能优化

client

- 缓存 - etag cache-control
- dns 控制在 4 个
- 并发 6 个。图片可以放在其他域名下， cookie 隔离。但是小图片最好是用。
- gzip
- 图片 webp 或者 jpg - progressive。无损的 png。
- imgset
- async defer

server

- 代码压缩
- 无状态的用 ssr 降低复杂度 + 减少请求所带的权限信息
- 有状态的可以用 spa
- cdn
- http 2

两个方面

1. 使用插件从开始的时候，贯穿全程监控性能
2. 事后做
