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
  console.log('a') // c2-1
  const res = await async2() // c2-2
  console.log('b') // m1 - 1
}

async function async2() {
  console.log('c') // c2-2
  return 2
}

console.log('d') // c1

setTimeout(() => {
  // n
  console.log('e')
}, 0)

async1().then((res) => {
  // c2 //m3
  console.log('f')
})

new Promise((resolve) => {
  console.log('g') // c3
  resolve()
}).then(() => {
  console.log('h') // m2
})

console.log('i') // c4

// d a c g i b h f e
