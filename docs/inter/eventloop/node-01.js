// setTimeout(function () {
//   console.log('setTimeout')
// }, 0)
// setImmediate(function () {
//   console.log('setImmediate')
// })
// new Promise(function (resolve, reject) {
//   resolve()
// }).then(function () {
//   console.log('promise.then')
// })
// process.nextTick(function () {
//   console.log('next nick')
// })
// console.log('同步代码')
//
// // 同步
// // next tick
// // promise then
// // setTimeout
// // setImmediate
setTimeout(function () {
  console.log('1')
  new Promise(function (resolve, reject) {
    resolve()
    console.log('2')
  }).then(() => {
    console.log('3')
  })
})
setTimeout(function () {
  console.log('4')
})

// 1 2 3 4
