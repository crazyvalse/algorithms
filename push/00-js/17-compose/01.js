function compose() {
  const args = arguments
  const start = args.length - 1
  return function () {
    let i = start
    // 最后一个方法的参数不同
    let result = args[start].apply(this, arguments)
    // 其他方法的参数都是上一个的返回值
    while (i--) {
      result = args[i].call(this, result)
    }
    return result
  }
}

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
console.info(greet('kevin'))
