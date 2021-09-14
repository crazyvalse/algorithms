## 参考

- http://interview.poetries.top/excellent-docs/2-CSS%E6%A8%A1%E5%9D%97.html#%E5%A6%82%E4%BD%95%E7%94%BB%E4%B8%80%E4%B8%AA%E4%B8%89%E8%A7%92%E5%BD%A2
- https://segmentfault.com/a/1190000013325778

## 复习

- [ ] flex 布局 ss

## 50

### 1 介绍一下标准的 CSS 的盒子模型？与低版本 IE 的盒子模型有什么不同的？

标准盒子模型：宽度=内容的宽度（content）+ border + padding + margin
低版本 IE 盒子模型：宽度=内容宽度（content+border+padding）+ margin

### 2 box-sizing 属性？

用来控制元素的盒子模型的解析模式，默认为 content-box
context-box：W3C 的标准盒子模型，设置元素的 height/width 属性指的是 content 部分的高/宽
border-box：IE 传统盒子模型。设置元素的 height/width 属性指的是 border + padding + content 部分的高/宽

### 3 CSS 选择器有哪些？哪些属性可以继承？

CSS 选择符：

- id 选择器(#myid)、
- 类选择器(.myclassname)、
- 标签选择器(div, h1, p)、
- 相邻选择器(h1 + p)、
- 子选择器（ul > li）、
- 后代选择器（li a）、
- 通配符选择器（\*）、
- 属性选择器（a[rel="external"]）、
- 伪类选择器（a:hover, li:nth-child）

可继承的属性：font-size, font-family, color

不可继承的样式：border, padding, margin, width, height

优先级（就近原则）：!important > [ id > class > tag ]
!important 比内联优先级高

### 5 CSS3 新增伪类有那些?

p:first-of-type 选择属于其父元素的首个元素
p:last-of-type 选择属于其父元素的最后元素
p:only-of-type 选择属于其父元素唯一的元素
p:only-child 选择属于其父元素的唯一子元素
p:nth-child(2) 选择属于其父元素的第二个子元素
:enabled :disabled 表单控件的禁用状态。
:checked 单选框或复选框被选中。

### 6 为什么会出现浮动和什么时候需要清除浮动？清除浮动的方式？

浮动元素碰到包含它的边框或者浮动元素的边框停留。由于浮动元素不在文档流中，所以文档流的块框表现得就像浮动框不存在一样。浮动元素会漂浮在文档流的块框上。
浮动带来的问题：

- 父元素的高度无法被撑开，影响与父元素同级的元素
- 与浮动元素同级的非浮动元素（内联元素）会跟随其后
- 若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构。

清除浮动的方式：

- 父级 div 定义 height
- 最后一个浮动元素后加空 div 标签 并添加样式 clear:both。
- 包含浮动元素的父标签添加样式 overflow 为 hidden 或 auto。
- 父级 div 定义 zoom

### 7. 设置元素浮动后，该元素的 display 值是多少？

自动变成 display:block

### 8. 浏览器是怎样解析 CSS 选择器的？

CSS 选择器的解析是从右向左解析的。若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能。若从右向左匹配，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则，则结束这个分支的遍历。两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点），而从左向右的匹配规则的性能都浪费在了失败的查找上面。
而在 CSS 解析完毕后，需要将解析的结果与 DOM Tree 的内容一起进行分析建立一棵 Render Tree，最终用来进行绘图。在建立 Render Tree 时（WebKit 中的「Attachment」过程），浏览器就要为每个 DOM Tree 中的元素根据 CSS 的解析结果（Style Rules）来确定生成怎样的 Render Tree。

### 9. 在网页中的应该使用奇数还是偶数的字体？为什么呢？

使用偶数字体。偶数字号相对更容易和 web 设计的其他部分构成比例关系。Windows 自带的点阵宋体（中易宋体）从 Vista 开始只提供 12、14、16 px 这三个大小的点阵，而 13、15、17 px 时用的是小一号的点。（即每个字占的空间大了 1 px，但点阵没变），于是略显稀疏。

### 10. ::before 和 :after 中双冒号和单冒号有什么区别？解释一下这 2 个伪元素的作用

单冒号(:)用于 CSS3 伪类，双冒号(::)用于 CSS3 伪元素。
::before 就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于 dom 之中，只存在在页面之中。
:before 和 :after 这两个伪元素，是在 CSS2.1 里新出现的。起初，伪元素的前缀使用的是单冒号语法，但随着 Web 的进化，在 CSS3 的规范里，伪元素的语法被修改成使用双冒号，成为::before ::after

### 11. 让页面里的字体变清晰，变细用 CSS 怎么做？

-webkit-font-smoothing 在 window 系统下没有起作用，但是在 IOS 设备上起作用-webkit-font-smoothing：antialiased 是最佳的，灰度平滑。

### 12

Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决。

### 13. 有一个高度自适应的 div，里面有两个 div，一个高度 100px，希望另一个填满剩下的高度

外层 div 使用 position：relative；高度要求自适应的 div 使用 position: absolute; top: 100px; bottom: 0; left: 0

### 14. 浏览器如何判断是否支持 webp 格式图片

宽高判断法。通过创建 image 对象，将其 src 属性设置为 webp 格式的图片，然后在 onload 事件中获取图片的宽高，如 果能够获取，则说明浏览器支持 webp 格式图片。如果不能获取或者触发了 onerror 函数，那么就说明浏览器不支持 webp 格 式的图片
canvas 判断方法。我们可以动态的创建一个 canvas 对象，通过 canvas 的 toDataURL 将设置为 webp 格式，然后判断 返回值中是否含有 image/webp 字段，如果包含则说明支持 WebP，反之则不支持

- https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL

```js
function isSupportedWebp() {
  let isSupported = false
  try {
    isSupported = document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0
  } catch (e) {
    isSupported = false
  }
  isSupportedWebp = function () {
    return isSupported
  }
  return isSupportedWebp()
}
```

方法 2：

```js
const supportsWebp = ({ createImageBitmap, Image }) => {
  if (!createImageBitmap || !Image) return Promise.resolve(false)

  return new Promise((resolve) => {
    const image = new Image()
    image.onload = () => {
      createImageBitmap(image)
        .then(() => {
          resolve(true)
        })
        .catch(() => {
          resolve(false)
        })
    }
    image.onerror = () => {
      resolve(false)
    }
    image.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA='
  })
}

const webpIsSupported = () => {
  let memo = null
  return () => {
    if (!memo) {
      memo = supportsWebp(window)
    }
    return memo
  }
}

webpIsSupported()()
  .then((res) => {
    console.log('是否支持 webp', res)
  })
  .catch((err) => {
    console.log(err)
  })
```

```js
function check_webp_feature(feature, callback) {
  var kTestImages = {
    lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
    lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
    alpha:
      'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
    animation:
      'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA'
  }
  var img = new Image()
  img.onload = function () {
    var result = img.width > 0 && img.height > 0
    callback(feature, result)
  }
  img.onerror = function () {
    callback(feature, false)
  }
  img.src = 'data:image/webp;base64,' + kTestImages[feature]
}
```

### 15. 根据页面渲染流程可得知：

css 加载不会阻塞 DOM 树的解析;
css 加载会阻塞 DOM 树的渲染；
css 加载会阻塞后面 js 语句的执行

### 16. inline-block 的使用场景

要设置某些子元素在一行或者多行内显示，尤其是排列方向一致的情况下，应尽量用 inline-block。
希望若干个元素平行排列，且在父元素中居中排列，此时可以用 inline-block，且给父元素设 text-align: center。
inline-block 可以用一排 a {display: inline-block}实现横向导航栏，无论是居左的导航栏还是居右的都适用。
对于第一种和第三种情况虽然都可以使用 float 来实现，不过 inline-block 会比它好一些，原因如下：

浮动会脱离文档流，导致父元素高度塌陷

### 17.position: fixed 什么时候会失效？

我们知道，设置了 position: fixed 固定定位属性的元素会脱离文档流，达到“超然脱俗”的境界。

也就是说此时给这种元素设置 top, left, right, bottom 等属性是根据浏览器窗口定位的，与其上级元素的位置无关。

但是有一种情况例外：

若是设置了 position: fixed 属性的元素，它的祖先元素设置了 transform 属性则会导致固定定位属性失效。
只要你的 transform 设置的不是 none，都会影响到 position: fixed，因为此时就会相对于祖先元素指定坐标，而不是浏览器窗口。
注意，这个特性表现，目前只在 Chrome 浏览器/FireFox 浏览器下有。IE 浏览器，包括 IE11, fixed 还是 fixed 的表现。

### 18. 说一下回流和重绘

回流：

触发条件：当我们对 DOM 结构的修改引发 DOM 几何尺寸变化的时候，会发生回流的过程。

例如以下操作会触发回流：

1. 一个 DOM 元素的几何属性变化，常见的几何属性有 width、height、padding、margin、left、top、border 等等, 这个很好理解。
2. 使 DOM 节点发生增减或者移动。

以下不一定能触发，但是会刷新渲染队列：现代的浏览器都是很聪明的，由于每次重排都会造成额外的计算消耗，因此大多数浏览器都会通过队列化修改并批量执行来优化重排过程。浏览器会将修改操作放入到队列里，直到过了一段时间或者操作达到了一个阈值，才清空队列。但是！当你获取布局信息的操作的时候，会强制队列刷新

3. 读写 offset 族、scroll 族和 client 族属性的时候，浏览器为了获取这些值，需要进行回流操作。
4. 调用 window.getComputedStyle 方法。

回流过程：由于 DOM 的结构发生了改变，所以需要从生成 DOM 这一步开始，重新经过样式计算、生成布局树、建立图层树、再到生成绘制列表以及之后的显示器显示这整一个渲染过程走一遍，开销是非常大的。
