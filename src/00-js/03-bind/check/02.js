// const obj = {
//   name: 'zac'
// }
//
// function plus(a, b) {
//   return a + b + this.name
// }
//
// const pp = plus.bind(obj, 1)
//
// console.info(pp(2))

Function.prototype.myBind = function (context, ...args) {
  const fn = this
  function inner(...newArgs) {
    return fn.apply(this instanceof fn ? this : context, [...args, ...newArgs])
  }

  inner.prototype = Object.create(fn.prototype)
  return inner
}
