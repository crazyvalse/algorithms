/**
 * 1. 返回一个function
 * 2.
 * 疑问：
 * 1. 如果
 */
module.exports = function compose() {
  if (arguments.length === 0) {
    throw new Error('no functions')
  }
  const slice = Array.prototype.slice
  const fns = slice.call(arguments)
  return function () {
    let result = fns[0].apply(this, arguments)
    for (let i = 1; i < fns.length; i++) {
      result = fns[i].call(this, result)
    }
    return result
  }
}
