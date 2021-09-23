/**
 * 思路是把 方法挂在context上面执行
 * 1. 在context上面创建一个fn
 * 2. 拼接字符串
 * 3. 调用fn
 * 4. 删除fn
 * 5. 返回结果
 */
Function.prototype.myApply = function (context, args) {
  // 兼容
  context = context || global
  // 直传 array，需要做兼容
  args = args || []
  // fn
  const fn = Symbol()
  context[fn] = this
  // 执行
  const result = context[fn](...args)

  delete context[fn]
  return result
}
