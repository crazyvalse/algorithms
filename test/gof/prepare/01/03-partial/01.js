/*
// 最简单的偏函数 - 使用 bind
// 在计算机科学中，局部应用是指固定一个函数的一些参数，然后产生另一个更小元的函数。
// 什么是元？元是指函数参数的个数，比如一个带有两个参数的函数被称为二元函数。
// 柯里化是将一个多参数函数转换成多个单参数函数，也就是将一个 n 元函数转换成 n 个一元函数。

var greet = function(greeting, name) {
  return greeting + ' ' + name;
};

var sayHelloTo = _.partial(greet, 'hello');
sayHelloTo('fred');
// => 'hello fred'

// 使用了占位符。
var greetFred = _.partial(greet, _, 'fred');
greetFred('hi');
// => 'hi fred'
 */

// function getSiteId() {
//   const response = Promise.resolve({ status: 200, data: 'site-' + Date.now() })
//   getSiteId = function () {
//     return response
//   }
//   return getSiteId()
// }
//
// function getUserId() {
//   const response = Promise.resolve({ status: 200, data: 'user-' + Date.now() })
//   getUserId = function () {
//     return response
//   }
//   return getUserId()
// }
//
// function send(url, siteId, userId, token) {
//   const _url = url + `?siteId=${siteId}&userId=${userId}&token=${token}`
//   return Promise.resolve(_url)
// }
// /*
//
//  */
// async function mySend(token) {
//   const { data: siteId } = await getSiteId()
//   const { data: userId } = await getUserId()
//   return send('http://aliyun.com?', siteId, userId, token)
// }
//
// mySend('hello').then((result) => {
//   console.info(result)
// })
//
// mySend('world').then((result) => {
//   console.info(result)
// })
//
// setTimeout(() => {
//   mySend('zac').then((result) => {
//     console.info(result)
//   })
// }, 1000)
//
// /*
// 现在 userId 不一定了 可能需要经常换
//  */
//
// async function mySend2(userId, token) {
//   const { data: siteId } = await getSiteId()
//   return send('http://aliyun.com?', siteId, userId, token)
// }
//
// mySend2(1, 'hasdf').then((result) => {
//   console.info(result)
// })
//
const partial = function (fn) {
  const slice = Array.prototype.slice
  const args = slice.call(arguments, 1)
  return function () {
    const newArgs = args.concat(slice.call(arguments))
    return fn.apply(this, newArgs)
  }
}
//
function add(a, b) {
  return a + b
}

const newAdd = partial(add, 1)
console.info(newAdd(3))
