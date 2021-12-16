/*
举个例子，我要创建一个 websocket，然后在项目里，任意的地方使用

const ws = new WebSocket('ws://123.com/echo)

ws.send()
 */

// const ws = new WebSocket('ws://123.com/echo')
//
// window.WS = ws
//
// WS.send('123')

/*
1. 污染全局变量
2. 只在需要的时候才进行连接
 */

// let ws
// function getWS() {
//   let ws
//   if (ws) {
//     return ws
//   }
//   return new WebSocket('ws://123.com/echo')
// }

/*
1. 污染全局变量
 */

// module.exports = getWS

/*
2. 仍然需要一次判断
如果判断条件很多，并且还需要去后台访问进行判断，举个例子，我需要先去后台找到是siteId，或者用户的类型
- 请求后，把结果缓存
- 请求前，判断是否访问过后台

问题一点点解决，我不想每次都来判断一次
 */
// let t
// function getWS() {
//   if (!t) {
//     t = Date.now()
//   }
//   return t
// }
//
// console.info(getWS())
// setTimeout(() => {
//   console.info(getWS())
// }, 1000)

// function getWS() {
//   let t
//   if (!t) {
//     t = Date.now()
//     getWS = function () {
//       return t
//     }
//   }
//   return getWS()
// }
/*
不需要再进行判断了，因为只有第一次调用这个函数，才会执行里面的内容
同时，这个方法会被改写
 */

// console.info(getWS())
// setTimeout(() => {
//   console.info(getWS())
// }, 1000)
//
// setTimeout(() => {
//   console.info(getWS.toString())
// }, 2000)
//
// function getWS() {
//   let t = Date.now()
//   getWS = function () {
//     return t
//   }
//   return getWS()
// }
