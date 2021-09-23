// // 循环
// // 0,...,n
// function sum(n) {
//   let result = 0
//   for (let i = 0; i <= n; i++) {
//     result += i
//   }
//   return result
// }
//
// console.info(sum(5))
//
// /*
// 1. 截止条件
// if(迭代到n 或者 迭代到0的时候)
// 2. 参数
// index
// 3. 返回值
// result
// 4. 递归过程（中间过程）
// 上一次的结果 + 当前的index
// result += index
//  */
//
// function sum1(n) {
//   let result = 0
//   const walk = function (i) {
//     if (i > n) {
//       return
//     }
//     result += i
//     walk(i + 1)
//   }
//   walk(0)
//   return result
// }
//
// function sum2(n) {
//   const walk = function (i) {
//     if (i === 0) {
//       return 0
//     }
//     return i + walk(i - 1)
//   }
//   return walk(n)
// }
//
// // function sum2(n) {
// //   const walk = function (n) {
// //     if (n === 0) {
// //       return 0
// //     }
// //     return n + walk(n - 1)
// //   }
// //   return walk(n)
// // }
//
// console.info(sum1(5))
// console.info(sum2(5))

const a = [1, 2, 3, 4]

console.info(Object(a))
