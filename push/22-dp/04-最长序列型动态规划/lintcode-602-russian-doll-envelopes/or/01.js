/*
给定 N 个信封的长度和宽度
如果一个信封的长和宽都分别小于另一个信封的长度和宽，则这个信封可以放入另一个信封中
问最多能嵌套多少个信封
例如：
输入： [[5, 4], [6, 4], [6, 7], [2, 3]]
输出： 3([2, 3] => [5, 4] => [6, 7])
 */

const envelopes = function (array) {
  let result = 0
  const n = array.length
  const f = Array(n).fill(1)
  array.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      return a[0] - b[0]
    }
  })
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i][0] > array[j][0] && array[i][1] > array[j][1]) {
        f[i] = Math.max(f[i], f[j] + 1)
      }
    }
    result = Math.max(result, f[i])
  }
  return result
}

module.exports = envelopes
