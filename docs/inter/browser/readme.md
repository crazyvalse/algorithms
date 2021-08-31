# 如何避免回流和重绘

回流过程：由于 DOM 的结构(几何形状)发生了改变，所以需要从生成 DOM 这一步开始，重新经过样式计算、生成布局树、建立图层树、再到生成绘制列表以及之后的显示器显示这整一个渲染过程走一遍，开销是非常大的

- 添加或删除可见的 DOM 节点
- 元素的位置发生变化
- 元素的尺寸发生变化
- 内容发生变化
- 页面开始渲染的时候
- 浏览器窗口尺寸发生变化

js

- 避免频繁操作样式，如果是多个样式，最好定义 class
- 避免频繁操作 DOM。可以创建 documentFragment，在它上面应用所有 DOM 操作，最后再把它添加到文档中
- 也可以先把元素设置为 none，等操作结束后再显示出来。
- 缓存变量
- 对于复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素的频繁回流。

## 回流的优化

- 现代浏览器已经帮我们做了优化，采用队列存储多次的回流操作，然后批量执行，但获取布局信息例外，因为要获取到实时的数值，浏览器就必须要清空队列，立即执行回流。
- 编码上，避免连续多次修改，可通过合并修改，一次触发
- 减少 dom 的增删次数，可使用 字符串 或者 documentFragment 一次性插入
- 将动画效果应用到 position 属性为 absolute 或 fixed 的元素上 - 会生成新的图层
- 通过节流和防抖控制触发频率
- css3 硬件加速，transform、opacity、filters，will-change 开启后，会新建渲染层

## 开启 GPU 加速的方法

开启后，会将 dom 元素提升为独立的渲染层，它的变化不会再影响文档流中的布局。

- transform: translateZ(0)
- opacity
- filters
- Will-change

# 何时发生重绘

当 DOM 的修改导致了样式的变化，并且没有影响几何属性的时候，会导致直接重绘(repaint)。

重绘过程：由于没有导致 DOM 几何属性的变化，因此元素的位置信息不需要更新，所以当发生重绘的时候，会跳过生存布局树和建立图层树的阶段，直接到生成绘制列表，然后继续进行分块、生成位图等后面一系列操作。

- 现代浏览器对频繁的回流和重绘进行优化
- 浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，
- 如果队列中的任务数量或者时间间隔达到一个阈值的，浏览器会讲队列清空，进行一次批处理。
- 当访问以下属性或者方法时，浏览器会立刻清空队列
  - clientWidth、clientHeight、clientTop、clientLeft
  - offsetWidth、offsetHeight、offsetTop、offsetLeft
  - scrollWidth、scrollHeight、scrollTop、scrollLeft
  - width、height
  - getComputedStyle()
  - getBoundingClientRect()

## css -> cssom

- 应该尽量避免使用多层选择器，这样浏览器需要递归寻找符合条件的标签，浪费性能。
- CSS 选择符从右往左匹配查找，避免节点层级过多

## 补充

will-change： https://developer.mozilla.org/zh-CN/docs/Web/CSS/will-change

## JavaScript 会阻塞 DOM 生成

JavaScript 会阻塞 DOM 生成，而样式文件又会阻塞 JavaScript 的执行，所以在实际的工程中需要重点关注 JavaScript 文件和样式表文件，使用不当会影响到页面性能的

- 当文档中没有脚本时，浏览器解析完文档便能触发 DOMContentLoaded 事件；
- 如果文档中包含脚本，则脚本会阻塞文档的解析，而脚本需要等 CSSOM 构建完成才能执行。
- 在任何情况下，DOMContentLoaded 的触发不需要等待图片等其他资源加载完成。

## 内存泄露

- 意外的全局变量: 无法被回收
- 定时器: 未被正确关闭，导致所引用的外部变量无法被释放
- 事件监听: 没有正确销毁 (低版本浏览器可能出现)
- 闭包: 会导致父级中的变量无法被释放
- dom 引用: dom 元素被删除时，内存中的引用未被正确清空

## defer 和 async

参考：[你不知道的 DOMContentLoaded](https://zhuanlan.zhihu.com/p/25876048)

- 当 HTML 文档被解析时如果遇见 defer 脚本，则在后台加载脚本，文档解析过程不中断，而等文档解析结束之后，defer 脚本执行。另外，defer 脚本的执行顺序与定义时的位置有关。
- 当 HTML 文档被解析时如果遇见 async 脚本，则在后台加载脚本，文档解析过程不中断。脚本**加载完成后**，文档**停止**解析，脚本**执行**，执行**结束**后文档继续解析。
- 在 DOM、CSSOM 构建完毕，defer 脚本执行完成之后，DOMContentLoaded 事件触发。
- 如果 script 标签中包含 async，则 HTML 文档构建不受影响，解析完毕后，DOMContentLoaded 触发，而不需要等待 async 脚本执行、样式表加载等等。
- async 的 script；可以异步并行加载；该过程不阻塞 DOM 解析
  - 但是加载结束，执行时，仍然会阻塞 DOM 的解析；
  - 而且此时如果 DOM 没有 解析完，该 script 去操作访问 DOM，有可能出错；****而 defer script 没有该问题

### 根据页面渲染流程可得知：

css加载不会阻塞DOM树的解析;
css加载会阻塞DOM树的渲染；
css加载会阻塞后面js语句的执行
