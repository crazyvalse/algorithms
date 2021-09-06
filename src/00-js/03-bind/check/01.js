/**
 * bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，
 * 之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )
 * 第一个参数是context
 * 1. 可以绑定对象
 * 2. 可以缓存参数
 * 3. 可以绑定 new 出来的对象
 */
Function.prototype.myBind = function (context) {
  const preparedParams = Array.prototype.slice.call(arguments, 1)
  const fn = this
  function inner() {
    const args = preparedParams.concat(Array.prototype.slice.call(arguments))
    // 如果是对象形式的话 this 应该是 fn 的实例
    return fn.apply(this instanceof fn ? this : context, args)
  }

  inner.prototype = Object.create(fn.prototype)
  return inner
}
