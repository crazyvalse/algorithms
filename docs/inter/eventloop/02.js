// console.log('script start') // cel-1
//
// setTimeout(function () {
//   // n-el-1
//   console.log('timeout1')
// }, 10)
//
// new Promise((resolve) => {
//   // cel-2
//   console.log('promise1')
//   resolve()
//   // n-el-2
//   setTimeout(() => console.log('timeout2'), 10)
// }).then(function () {
//   console.log('then1') // 加塞儿 cmt-1
// })
//
// console.log('script end') // cel-3
//
// /*
// script start
// promise1
// script end
// then1
// timeout1
// timeout2
//  */
//
// new Promise((resolve) => {
//   console.info(1)
//   resolve()
//   console.info(2)
// }).then(() => {
//   console.info(3)
// })
//
// /*
// 1 2 3
//  */

async function async1() {
  console.log('1')
  const res = await async2()
  console.log('2')
}

async function async2() {
  console.log('3')
  return 3
}

console.log('4')

setTimeout(() => {
  console.log('5')
}, 0)
async1().then((res) => {
  console.log('6')
})

new Promise((resolve) => {
  console.log('7')
  resolve()
}).then(() => {
  console.log('8')
})

console.log('9')

/*
4
1
3
7

9
2
8
6
5

 */
