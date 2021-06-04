const A = [1, 2, 3, 4]

console.log('script start')

setTimeout(function () {
  // 放到下一个事件循环
  console.log('setTimeout')
}, 0)

Promise.resolve()
  .then(function () {
    // 插队
    console.log('promise1')
  })
  .then(function () {
    // 插队
    console.log('promise2')
  })

console.log('script end')

/*
script start
script end
promise1
promise2
setTimeout
 */
