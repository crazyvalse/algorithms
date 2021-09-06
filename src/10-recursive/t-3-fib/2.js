/*
在数学上，斐波那契数列以如下被以递归的方法定义：F0=0，F1=1，Fn=Fn-1+Fn-2（n>=2，n∈N*），
用文字来说，就是斐波那契数列列由 0 和 1 开始，
之后的斐波那契数列系数就由之前的两数相加。
形如：

1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

 */
/**
 * 递推法
 * @param n
 * @returns {*}
 */
function fibonacci(n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 1
  }
  let current = 1
  let next = 1
  for (let i = 1; i < n; i++) {
    ;[current, next] = [next, current + next]
  }
  return current
}

module.exports = fibonacci

let current = 1
let next = 2
;[current, next] = [next, current + next]
console.info(current, next)
