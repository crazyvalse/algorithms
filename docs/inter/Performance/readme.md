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
- https://juejin.cn/post/6981673766178783262?utm_source=gold_browser_extension#heading-2

## js

- JS 代码首先会解析为抽象语法树（AST），然后会通过解释器或者编译器转化为 Bytecode 或者 Machine Code
- 如果一个函数被多次调用并且参数一直传入 number 类型，那么 V8 就会认为该段代码可以编译为 Machine Code，因为你固定了类型，不需要再执行很多判断逻辑了。
- 但是如果一旦我们传入的参数类型改变，那么 Machine Code 就会被 DeOptimized 为 Bytecode，这样就有性能上的一个损耗了。所以如果我们希望代码能多的编译为 Machine Code 并且 DeOptimized 的次数减少，就应该尽可能保证传入的类型一致。
- 编译器还有个骚操作 Lazy-Compile，当函数没有被执行的时候，会对函数进行一次预解析，直到代码被执行以后才会被解析编译。
- 我们可以通过 optimize-js 实现这个功能，这个库会分析一些函数的使用情况，然后给需要的函数添加括号，可以放弃预编译。

## dns

```html
<link rel="dns-prefetch" href="//blog.poetries.top" />
```
