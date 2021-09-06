/**
 * 1. apply 第一个参数是 context
 * 2. apply 第二个参数是 array
 * 3. apply return 一个执行结果
 *
 * 思路 把 this 挂载到context上面执行，并删掉这个 this 后 return结果
 */
Function.prototype.myApply = function (context, args) {
  let result
  context = context || global
  args = Array.isArray(args) ? args : []
  const fnName = '__fn__' + Date.now()
  context[fnName] = this
  // 执行

  const _args = []
  for (let i = 0, length = args.length; i < length; i++) {
    _args[i] = 'args[' + i + ']'
    // 拼接字符串
  }

  result = eval('context[fnName](' + _args + ')')
  delete context[fnName]

  return result
}
