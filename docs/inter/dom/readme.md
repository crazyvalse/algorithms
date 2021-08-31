### 所有的事件都有冒泡吗？

并不是所有的事件都有冒泡的，例如以下事件就没有：

onblur
onfocus
onmouseenter
onmouseleave

## 事件流

- 事件流描述的是 从页面中接收事件的顺序。

### 1. 事件冒泡流

> 事件开始的时候由最具体的元素接收，然后逐级向上传播到较为不具体的节点（document）。

```html
<html>
  <head>
    <title>hello</title>
  </head>
  <body>
    <div>click me</div>
  </body>
</html>
```

点击 div 后

- div
- body
- html
- document

### 2. 事件捕获

不太具体的节点应该更早接收到事件，而具体的节点应该最后接收到事件。

## 3. 阻止冒泡和默认事件

```js
function stopBubble(e) {
  // 阻止冒泡
  if (e && e.stopPropagation) {
    e.stopPropagation()
  } else {
    // 兼容 IE
    window.event.cancelBubble = true
  }
}
function stopDefault(e) {
  // 阻止默认事件
  if (e && e.preventDefault) {
    e.preventDefault()
  } else {
    // 兼容 IE
    window.event.returnValue = false
    return false
  }
}
```


### 4. target="_blank"有哪些问题？
存在问题：

- 安全隐患：新打开的窗口可以通过window.opener获取到来源页面的window对象即使跨域也可以。某些属性的访问被拦截，是因为跨域安全策略的限制。 但是，比如修改window.opener.location的值，指向另外一个地址，这样新窗口有可能会把原来的网页地址改了并进行页面伪装来欺骗用户。
- 新打开的窗口与原页面窗口共用一个进程，若是新页面有性能不好的代码也会影响原页面
解决方案：

尽量不用target="_blank"

如果一定要用，需要加上rel="noopener"或者rel="noreferrer"。这样新窗口的window.openner就是null了，而且会让新窗口运行在独立的进程里，不会拖累原来页面的进程。(不过，有些浏览器对性能做了优化，即使不加这个属性，新窗口也会在独立进程打开。不过为了安全考虑，还是加上吧。)
