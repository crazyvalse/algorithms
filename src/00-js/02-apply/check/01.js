/**
 * 思路是把 方法挂在context上面执行
 * 1. 在context上面创建一个fn
 * 2. 拼接字符串
 * 3. 调用fn
 * 4. 删除fn
 * 5. 返回结果
 */
Function.prototype.myApply = function (context, args) {
  context = context || global
  args = args || []
  const fn = Symbol()
  context[fn] = this

  const result = context[fn](...args)

  delete context[fn]
  return result
}
