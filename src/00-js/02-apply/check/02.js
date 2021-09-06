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

  const fnName = Symbol()
  context[fnName] = this

  const result = context[fnName](...args)

  delete context[fnName]

  return result
}
