/*
给定 N 个信封的长度和宽度
如果一个信封的长和宽都分别小于另一个信封的长度和宽，则这个信封可以放入另一个信封中
问最多能嵌套多少个信封
例如：
输入： [[5, 4], [6, 4], [6, 7], [2, 3]]
输出： 3([2, 3] => [5, 4] => [6, 7])
 */
/**
 * let lastE = a[0]
 * f[i] = 前i个能嵌套多少个
 *
 * f[i] = f[i - 1]
 * if(a > b, c > d){
 *   f[i] += 1
 *   lastE = a[i - 1]
 * }
 *
 * 1. 排序
 * 2.
 * @param a
 */
const envelopes = function (a) {
  a.sort(([a1, a0], [b1, b0]) => {
    if (a1 === b1) {
      return a0 - b0
    } else {
      return a1 - b1
    }
  })

  const n = a.length
  const f = Array(n + 1).fill(0)
  let lastE = [0, 0]
  for (let i = 1; i <= n; i++) {
    const [ae, be] = lastE
    const [at, bt] = a[i - 1]
    f[i] = f[i - 1]
    if (at > ae && bt > be) {
      f[i] += 1
      lastE = a[i - 1]
    }
  }
  return f[n]
}

module.exports = envelopes
