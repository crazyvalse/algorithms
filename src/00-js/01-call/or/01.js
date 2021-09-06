/**
 * 1. 把this(fn)挂载到context上面
 * 2. 执行
 * 3. 删除this
 * 4. 返回结果
 *
 * 注意处理arguments
 * @param context
 */
Function.prototype.myCall = function (context) {
  // 做判断
  context = context || global
  context.__$$__ = this

  // 处理 arguments
  const args = []

  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }

  // 2. 执行
  const result = eval('context.__$$__(' + args + ')')

  // 3. 删除this
  delete context.__$$__

  return result
}
