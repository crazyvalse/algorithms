const compose = require('./01')

test('compose', () => {
  // 需求：输入 'kevin'，返回 'HELLO, KEVIN'。

// 非 pointfree，因为提到了数据：name
// var greet = function (name) {
//   return ('hello ' + name).toUpperCase()
// }

// pointfree
// 先定义基本运算，这些可以封装起来复用
  var toUpperCase = function (x) {
    return x.toUpperCase()
  }
  var hello = function (x) {
    return 'HELLO, ' + x
  }

  const greet = compose(hello, toUpperCase)
  expect(greet('kevin')).toEqual('HELLO, KEVIN')
})
