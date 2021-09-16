// const a = [1, 3, 5, 6]
//
// function solution(a, target) {
//   const n = a.length
//   const f = Array(target + 1).fill(target + 1)
//   f[0] = 0
//   for (let i = 0; i <= n; i++) {
//     for (let t = a[i]; t <= target; t++) {
//       f[t] = Math.min(f[t], f[t - a[i]] + 1)
//     }
//   }
//   return f[target] === target + 1 ? -1 : f[target]
// }
//
// console.info(solution(a, 13))

const old = console.info

console.info = function (...args) {
  console.log(123)
  old.apply(this, args)
}
