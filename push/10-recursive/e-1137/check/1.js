/*
泰波那契序列Tn定义如下：

T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0的条件下 Tn+3 = Tn + Tn+1 + Tn+2

给你整数n，请返回第 n 个泰波那契数Tn 的值。



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
var tri = function (n, map) {
  if (map[n] !== undefined) {
    return map[n]
  }
  return (map[n] = tri(n - 1, map) + tri(n - 2, map) + tri(n - 3, map))
}

const partial = function (n) {
  return tri(n, { 0: 0, 1: 1, 2: 1 })
}

module.exports = partial
