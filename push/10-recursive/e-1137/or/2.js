/*
泰波那契序列 Tn 定义如下： 

T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

 

示例 1：

输入：n = 4
输出：4
解释：
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
示例 2：

输入：n = 25
输出：1389537
 */

var tri = function (n, t1 = 0, t2 = 1, t3 = 1) {
  if (n === 0) {
    return 0
  }
  if (n < 3) {
    return t3
  }
  return tri(--n, t2, t3, t1 + t2 + t3)
}

function partial(fn, t1, t2, t3) {
  return function (n) {
    return fn.call(this, n, t1, t2, t3)
  }
}

module.exports = partial(tri, 0, 1, 1)
