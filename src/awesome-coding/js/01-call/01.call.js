/**
 * 1. 判断this是否是函数，防止 Function.prototype.myCall()
 * 2. context 是可选的参数，如果不传默认为 window
 * 3. context 创建一个 Symbol 保证不会重名的属性，讲当前函数赋值给这个属性
 * 4. 处理参数，传入第一个参数后的其余参数
 * 5. 调用函数后删除该Symbol属性
 * @param context
 * @param args
 */
Function.prototype.myCall = function (context = window, ...args) {
  // 1. 判断this是否是函数，防止 Function.prototype.myCall()
  if (this === Function.prototype) {
    return undefined
  }

  // 3. context 创建一个 Symbol 保证不会重名的属性，讲当前函数赋值给这个属性
  const fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}

function foo() {
  console.info(this.name)
}

const a = {
  name: 'zac'
}

const b = {
  name: 'isaac'
}

foo.call(a)
foo.myCall(a)
