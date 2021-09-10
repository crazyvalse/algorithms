/**
 */
Function.prototype.myBind = function (context, ...args) {
  // 1. 获得 fn
  const fn = this

  function inner(...newArgs) {
    // 2. 有可能是 new 出来的，也有可能是指向的
    // 执行
    return fn.apply(this instanceof fn ? this : context, [...args, ...newArgs])
  }

  // 如果是new的话得有 prototype
  inner.prototype = Object.create(fn.prototype)

  return inner
}
