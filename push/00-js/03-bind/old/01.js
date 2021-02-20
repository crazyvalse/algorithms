/**
 * bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )
 * 第一个参数是context
 * 后面的参数可以缓存起来供返回的函数用
 * 返回一个function
 * 1. 改变 this 的指向 - apply
 * 2. 缓存参数
 * 3. bind后的function也适用于对象
 */
Function.prototype.myBind = function (context) {
  const slice = Array.prototype.slice
  const fn = this
  const preparedArgs = slice.call(arguments, 1)

  function InnerFn() {
    // 如果是对象还得是 this，context 只是预存的值
    return fn.apply(this instanceof fn ? this : context, preparedArgs.concat(slice.call(arguments)))
  }

  InnerFn.prototype = Object.create(fn.prototype)
  return InnerFn
}
