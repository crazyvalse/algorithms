/*
给定一副牌，每张牌上都写着一个整数。

此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

1. 每组都有 X 张牌。
2. 组内所有的牌上都写着相同的整数。
仅当你可选的 X >= 2 时返回 true。

[1,1,2,2,2,2]
 */

/**
 * 1. 先做一个统计每个字符的map
 * 2. 查看是否相等
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  var gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
  const result = deck
    .reduce((pre, curr) => {
      pre[curr] = pre[curr] ? pre[curr] + 1 : 1
      return pre
    }, new Array(13))
    .reduce((pre, curr, index) => {
      if (index === 0) {
        return curr
      }
      return gcd(pre, curr)
    }, 0)
  return result >= 2
}

console.info(hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2]))
