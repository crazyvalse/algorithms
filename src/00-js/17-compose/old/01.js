/**
 * 1. 返回一个function
 * 2.
 * 疑问：
 * 1. 如果
 */
module.exports = function compose() {
  if (arguments.length === 0) {
    throw new Error('参数有问题: ' + JSON.stringify(arguments))
  }
  const fns = arguments
  return function () {
    //接收到的参数全部都传给第一个方法
    let result = null
    for (let i = 0; i < fns.length; i++) {
      if (i === 0) {
        result = fns[i].apply(this, Array.prototype.slice.call(arguments))
        continue
      }
      result = fns[i].call(this, result)
    }
    return result
  }
}
