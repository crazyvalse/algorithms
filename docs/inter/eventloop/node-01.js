// setTimeout(function () {
//   console.log('setTimeout1')
// }, 0)
// setImmediate(function () {
//   console.log('setImmediate2')
// })
// new Promise(function (resolve, reject) {
//   resolve()
// }).then(function () {
//   console.log('promise.then3')
// })
// process.nextTick(function () {
//   console.log('next nick4')
// })
// console.log('同步代码5')
// /*
// 5
// 4
// 3
// 1
// 2
//  */

/**************/
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

/*
1234
 */
