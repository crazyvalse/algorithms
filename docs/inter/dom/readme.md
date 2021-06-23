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
