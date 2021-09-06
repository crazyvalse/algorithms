// 第二版: 可以bind的时候可以接收参数
// Function.prototype.bind2 = function (context) {
//   const self = this
//   // 获取bind2函数从第二个参数到最后一个参数
//   const args = Array.prototype.slice.call(arguments, 1)
//
//   return function () {
//     // 这个时候的arguments是指bind返回的函数传入的参数
//     const bindArgs = Array.prototype.slice.call(arguments)
//     self.apply(context, args.concat(bindArgs))
//   }
// }

// // 解释bind
// const foo = {
//   value: 1
// }
//
// function bar() {
//   console.log(this.value)
// }
//
// // 返回了一个函数
// const bindFoo = bar.bind(foo)
//
// bindFoo() // 1

// 2. 需要能接收两个参数
// const foo = {
//   value: 1
// }
//
// function bar(name, age) {
//   console.log(this.value)
//   console.log(name)
//   console.log(age)
// }
//
// const bindFoo = bar.bind2(foo, 'daisy')
// bindFoo('18')

// 第三版
// Function.prototype.bind2 = function (context) {
//   // function本体
//   const self = this
//   // 获得除1后的参数
//   const args = Array.prototype.slice.call(arguments, 1)
//
//   // 子类继承父类，并调用父类的构造器
//   const fbound = function () {
//     // 新的参数
//     const bindArgs = Array.prototype.slice.call(arguments)
//     // 当作为构造函数时，this 指向实例，self 指向绑定函数，因为下面一句 `fbound.prototype = this.prototype;`，已经修改了 fbound.prototype 为 绑定函数的 prototype，此时结果为 true，当结果为 true 的时候，this 指向实例。
//     // 当作为普通函数时，this 指向 window，self 指向绑定函数，此时结果为 false，当结果为 false 的时候，this 指向绑定的 context。
//     self.apply(this instanceof self ? this : context, args.concat(bindArgs))
//   }
//   // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承函数的原型中的值
//   fbound.prototype = this.prototype
//   return fbound
// }

// 优化后的

// 第四版
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new Error('Function.prototype.bind - what is trying to be bound is not callable')
  }

  const self = this
  const args = Array.prototype.slice.call(arguments, 1)
  const fNOP = function () {}

  const fbound = function () {
    return self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)))
  }

  fNOP.prototype = this.prototype
  fbound.prototype = new fNOP()

  return fbound
}
