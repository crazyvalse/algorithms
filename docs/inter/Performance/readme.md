# 性能优化

- 路由懒加载
- CDN 加速，把通用库从 vendor 中隔离
- Nginx 的 gzip 压缩
- Vue 异步组件 () => import('./app.vue')
- 服务器端渲染
- UI 库按需加载
- 首屏为登录页，可以做成多入口，或者 预渲染
- prefetch 这段资源将会在未来某个导航或者功能要用到，但是本资源的下载顺序权重比较低，prefetch 通常用于加速下一次导航
- preload 将会把资源得下载顺序权重提高，使得关键数据提前下载好，优化页面打开速度

## 参考

- http://interview.poetries.top/docs/excellent.html#_24-1-%E5%9B%BE%E7%89%87%E4%BC%98%E5%8C%96
- https://mp.weixin.qq.com/s?__biz=MzU2Mzk1NzkwOA==&mid=2247483933&idx=1&sn=c2729ef1fd4a28f4707bb923a5ffae79&chksm=fc531be6cb2492f04475bac0fecbd1a9f9781ca67f35bd30c320964b24a8cbc2ca3d7bbd5345&scene=21#wechat_redirect
