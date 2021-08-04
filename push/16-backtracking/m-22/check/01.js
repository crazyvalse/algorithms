/*
22. 括号生成

数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且有效的括号组合。

示例 1：
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]

示例 2：
输入：n = 1
输出：["()"]


提示：

1 <= n <= 8
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = []
  const walk = function (n, m, cart) {
    if (n < 0 || m < 0) {
      return
    }
    if (n === 0 && m === 0) {
      result.push(cart)
      return
    }

    // 相加就加
    if (n > 0) {
      walk(n - 1, m, cart + '(')
    }

    // 只要大于n就行
    if (m > 0 && m > n) {
      walk(n, m - 1, cart + ')')
    }
  }
  walk(n, n, '')
  return result
}

module.exports = generateParenthesis

console.info(generateParenthesis(3))
