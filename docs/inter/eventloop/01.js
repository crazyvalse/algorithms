const A = [1, 2, 3, 4]

console.log('script start1')

setTimeout(function () {
  // 放到下一个事件循环
  console.log('setTimeout2')
}, 0)

Promise.resolve()
  .then(function () {
    // 插队
    console.log('promise13')
  })
  .then(function () {
    // 插队
    console.log('promise24')
  })

console.log('script end5')

/*
1
5
3
4
2
 */
