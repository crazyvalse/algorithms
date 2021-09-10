## 参考

[require/exports 与 import/export，有啥不一样的？？](https://juejin.cn/post/6914939774276993038)

## 差异

- 输出差异
  - `require/exports` 输出的是一个值的拷贝，也就是说，当你引入一个值，模块内部的变化是影响不到这个值的。
  - `import/export` 输出的是值的索引，也就是说，该引用其实是一个动态引用，并不会缓存值，当模块内部发生变化，你的引入值也会随之更新。
- 加载差异
  - CommonJS 模块是运行时加载。因为 CommonJS 模块加载的是一个对象，即 module.exports 属性，该对象只有在脚本运行完才生成，也因此没办法再编译时做“静态优化”
  - ES6 模块是编译时输出接口。 ES6 模块不是对象，它对外接口只是一个静态定义，在代码静态解析阶段才会生成，因此效率要比 CommonJS 模块加载高。
- 异步差异
  - CommonJS模块中的require是同步加载模块。
  - ES6模块的import命令是异步加载的，有一个独立的模块依赖的解析阶段。