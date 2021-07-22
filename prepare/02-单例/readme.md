单例模式的例子

- window document
- ES6 中的 module 模块，通过 import/export 导出模块中的变量是单例的，也就是说，如果在某个地方改变了模块内部变量的值，别的地方再引用的这个值是改变之后的。
- Vue、Vue-router、Vuex 都是单例

- 党务
- Vuex 中
  - src/store.js
- Vue-router
  - src/install.js
