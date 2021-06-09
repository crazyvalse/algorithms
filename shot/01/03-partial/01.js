/*
最简单的偏函数 - 使用 bind
在计算机科学中，局部应用是指固定一个函数的一些参数，然后产生另一个更小元的函数。
什么是元？元是指函数参数的个数，比如一个带有两个参数的函数被称为二元函数。
柯里化是将一个多参数函数转换成多个单参数函数，也就是将一个 n 元函数转换成 n 个一元函数。

var greet = function(greeting, name) {
  return greeting + ' ' + name;
};

var sayHelloTo = partial(greet, 'hello');
sayHelloTo('fred');
// => 'hello fred'
例如 我们经常需要发送 异步请求，为了修改方便呢 我们一般会封装一层。
假设现在有一个接口 经常需要用，所有模块都要用，其中某一些参数是固定的，我们最好是再封装一层
 */

function add(a, b, c, d) {
  return a + b + c + d
}
// 把两次传入的参数 合并，并且调用fn方法
// function partial(fn) {
//   // 先把第一次传入的参数进行缓存
//   const args = Array.prototype.slice.call(arguments, 1)
//   return function () {
//     // 第二次传入的参数
//     const secondArgs = [...arguments]
//     return fn.apply(this, args.concat(secondArgs))
//   }
// }
function partial(fn, ...args) {
  return function (...newArgs) {
    return fn.apply(this, [...args, ...newArgs])
  }
}

const mountedAdd = partial(add, 1, 2) // 把第一个参数给缓存
console.info(mountedAdd(3, 4)) // 只传第二个参数
// 10
/**
 * 1. 需要方法里传入另外一个方法以及相关的参数
 * 2. 需要把传入的参数缓存起来
 * 3. 返回一个新的 function
 *
 * 4. 当拿到这个 function 的时候，能够继续使用
 *
 * @param fn
 * @returns {function()}
 * Array.prototype.slice()
 */
// function partial(...args) {
//   const sum = args.reduce((pre, cur) => pre + cur, 0)
//   // 新的function
//   // 能够直接执行
//   return function (...args) {
//     return sum + args.reduce((pre, cur) => pre + cur, 0)
//   }
// }
//
// const p = partial(1, 2, 3, 4)
// console.info(p(5, 6)) // [1, 2]
