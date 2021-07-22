## 1. 移动端适配

```js
// rem适配用这段代码动态计算html的font-size大小
;(function (win) {
  var docEl = win.document.documentElement
  var timer = ''

  function changeRem() {
    var width = docEl.getBoundingClientRect().width
    if (width > 750) {
      // 750是设计稿大小
      width = 750
    }
    var fontS = width / 10 // 把设备宽度十等分 1rem=10px
    docEl.style.fontSize = fontS + 'px'
  }
  win.addEventListener(
    'resize',
    function () {
      clearTimeout(timer)
      timer = setTimeout(changeRem, 30)
    },
    false
  )
  win.addEventListener(
    'pageshow',
    function (e) {
      if (e.persisted) {
        //清除缓存
        clearTimeout(timer)
        timer = setTimeout(changeRem, 30)
      }
    },
    false
  )
  changeRem()
})(window)
```

## 2. 移动端 300ms 延迟

由于用户可以进行双击缩放或者双击滚动的操作，当用户一次点击屏幕之后，浏览器并不能立刻判断用户是确实要打开这个链接，还是想要进行双击操作。因此，iOS Safari 就等待 300 毫秒，以判断用户是否再次点击了屏幕。

### 2.1 禁用缩放

表明这个页面是不可缩放的，那双击缩放的功能就没有意义了，此时浏览器可以禁用默认的双击缩放行为并且去掉 300ms 的点击延迟。

```html
<head>
  <meta name="viewport" content="user-scalable=no" />
  <meta name="viewport" content="initial-scale=1,maximum-scale=1" />
</head>
```

这个方案有一个缺点，就是必须通过完全禁用缩放来达到去掉点击延迟的目的，然而完全禁用缩放并不是我们的初衷，我们只是想禁掉默认的双击缩放行为，这样就不用等待 300ms 来判断当前操作是否是双击。
但是通常情况下，我们还是希望页面能通过双指缩放来进行缩放操作，比如放大一张图片，放大一段很小的文字。

### 2.2 更改默认视口宽度

一开始，为了让桌面站点能在移动端浏览器正常显示，移动端浏览器默认的视口宽度并不等于设备浏览器视窗宽度，而是要比设备浏览器视窗宽度大，通常是 980px。我们可以通过以下标签来设置视口宽度为设备宽度。

```html
<meta name="viewport" content="width=device-width" />
```

### 2.3 通常做法

FastClick FastClick 的实现原理是在检测到 touchend 事件的时候，会通过 DOM 自定义事件立即出发模拟一个 click 事件，并把浏览器在 300ms 之后的 click 事件阻止掉。

### 参考

- https://blog.csdn.net/qq_34986769/article/details/62046696
- https://jelly.jd.com/article/6006b1045b6c6a01506c87f8

触摸事件的响应顺序

ontouchstart
ontouchmove
ontouchend
onclick

