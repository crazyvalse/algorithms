## 适配器

避免重构

- 又称包装器模式，将一个类（对象）的接口（方法、属性）转化为用户需要的另一个接口，解决类（对象）之间接口不兼容的问题
- 主要功能是进行转换匹配，目的是复用已有的功能，而不是来实现新的接口。

## 场景

- jQuery.ajax 适配 Axios \$.ajax()

```js
/* 适配器 */
function ajax2AxiosAdapter({ url, type, dataType, data, success, error }) {
  return axios({
    url,
    method: type,
    responseType: dataType,
    data: data
  })
    .then(success)
    .catch(error)
}

/* 经过适配器包装 */
$.ajax = function (options) {
  return ajax2AxiosAdapter(options)
}

$.ajax({
  url: '/demo-url',
  type: 'POST',
  dataType: 'json',
  data: {
    name: '张三',
    id: '2345'
  },
  success: function (data) {
    console.log('访问成功！')
  },
  error: function (err) {
    console.err('访问失败～')
  }
})
```

### vue 中的 计算属性

旧有 data 中的数据不满足当前的要求，通过计算属性的规则来适配成我们需要的格式，对原有数据并没有改变，只改变了原有数据的表现形式。

## 优点

- 已有的功能如果只是接口不兼容，使用适配器适配已有功能，可以使原有逻辑得到更好的复用，有助于避免大规模改写现有代码；
- 可扩展性良好，在实现适配器功能的时候，可以调用自己开发的功能，从而方便地扩展系统的功能；
- 灵活性好，因为适配器并没有对原有对象的功能有所影响，如果不想使用适配器了，那么直接删掉即可，不会对使用原有对象的代码有影响；

## 缺点

- 会使系统变得凌乱。
- 阅读体验并不好。
