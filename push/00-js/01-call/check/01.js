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
 * 1. call的第一个参数是 context
 * 2. 后面的是真正的参数
 * 3. context调用call本身的方法
 * 思路：
 * 1.在context上面创建一个属性 = fn
 * 2. 调用这个方法
 * 3. 删掉这个属性
 * 4. 返回值
 * @param context
 */
Function.prototype.myCall = function (context) {
  context = context || global
  let fnName = Symbol()
  context[fnName] = this
  const args = Array.from({ length: arguments.length - 1 }, (value, index) => `arguments[${index + 1}]`)
  const result = eval(`context[fnName](${args})`)
  delete context[fnName]
  return result
}
