//1. 普通方法

/*let t
function foo() {
  if (t) {
    return t
  }
  t = new Date()
  return t
}*/

// > 问题： 1. 污染了全局变量；2. 每次调用foo的时候都需要一次判断；

// 2. 闭包

/*const foo = (function () {
  let t
  return function () {
    if (t) {
      return t
    }
    t = new Date()
    return t
  }
})()

console.info(foo())

setTimeout(() => {
  console.info(foo())
}, 1000)*/

// > 问题： 没有解决需要一次判断

// 3. 函数对象

/*function foo() {
  if (foo.t) {
    return foo.t
  }
  foo.t = new Date()
  return foo.t
}*/

// > 避免了污染全局；但是没有解决需要一次判断的问题

// 4. 惰函数

let foo = function () {
  let t = new Date()
  foo = function () {
    return t
  }
  return foo()
}

module.exports = foo

// console.info(foo())
// setTimeout(() => {
//   console.info(foo())
// }, 3000)

/************************ 更多应用 *************************/

// 简化写法
// function addEvent (type, el, fn) {
//   if (window.addEventListener) {
//     el.addEventListener(type, fn, false);
//   }
//   else if(window.attachEvent){
//     el.attachEvent('on' + type, fn);
//   }
// }

// function addEvent (type, el, fn) {
//   if (window.addEventListener) {
//     addEvent = function (type, el, fn) {
//       el.addEventListener(type, fn, false);
//     }
//   }
//   else if(window.attachEvent){
//     addEvent = function (type, el, fn) {
//       el.attachEvent('on' + type, fn);
//     }
//   }
// }
