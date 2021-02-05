function compose() {
  const args = arguments
  const start = args.length - 1
  return function () {
    let i = start
    // 最后一个方法的参数不同
    let result = args[start].apply(this, arguments)
    // 其他方法的参数都是上一个的返回值
    while (i--) {
      result = args[i].call(this, result)
    }
    return result
  }
}

module.exports = compose
