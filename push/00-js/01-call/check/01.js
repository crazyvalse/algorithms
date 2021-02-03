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
// 第一个参数是 context 后面的是实际传入的参数
Function.prototype.myCall = function (context) {
  context = context || global
  context.__fn__ = this
  // 拼接 context.__fn__(arguments[1], ..., arguments[arguments.length-1])

  const args = []
  for (let i = 1, length = arguments.length; i < length; i++) {
    args[i] = 'arguments[' + i + ']'
  }

  const result = eval('context.__fn__(' + args + ')')

  delete context.__fn__

  return result
}
