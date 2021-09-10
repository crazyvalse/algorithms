/**
 * 思路 就是把this挂在到 context上面，然后执行
 * 1. fn = this
 * 2. 执行
 * 3. 删除fn
 * 4. 返回结果
 * @param context
 */
Function.prototype.myCall = function (context, ...args) {
  context = context || global
  const fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}
