/**
 * 思路是 把方法挂载到 context上执行，然后删掉 并返回结果
 * 执行： 拼接字符串，并用 eval 执行
 * 1. 把this(fn)挂载到context上面
 * 2. 执行
 * 3. 删除this
 * 4. 返回结果
 *
 * 注意处理arguments
 * @param context
 */
/**
 * call(fn, ...array)
 * 思路就是把 方法挂到 context 上 然后执行
 *
 * 1. 挂载到context上面
 * 2. 拼接参数 context[fnName](arguments[1], )
 * 3. 执行
 * 4. 删除
 *
 * @param context
 */
// fn.call(null, 1, 2, 3)
Function.prototype.myCall = function (context, ...args) {
  context = context || global
  const fnName = Symbol()
  context[fnName] = this

  const result = context[fnName](...args)

  delete context[fnName]

  return result
}
