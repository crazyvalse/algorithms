/**
 * 1. 返回一个function
 * 2.
 * 疑问：
 * 1. 如果
 */
module.exports = function compose(ff, ...fns) {
  return function (...args) {
    // 第一个可以传入多个参数
    let result = ff.apply(this, args)
    // 后面的只能一个
    if (Array.isArray(fns)) {
      for (let i = 0; i < fns.length; i++) {
        result = fns[i].call(this, result)
      }
    }
    return result
  }
}
