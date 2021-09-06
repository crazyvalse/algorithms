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
 * 递归 - 思路可用左 可用右
 * if(left > 0) 就可以放 left
 *
 * if(left < right) 就可以放 right
 *
 *
 * 1. 出口
 *  left === 0 && right === 0
 *
 *
 * 2. 参数
 * 3. 过程
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = []

  const walk = function (left, right, cart) {
    if (left === 0 && right === 0) {
      result.push(cart)
      return
    }
    if (left > 0) {
      walk(left - 1, right, cart + '(')
    }
    if (left < right) {
      walk(left, right - 1, cart + ')')
    }
  }
  walk(n, n, '')
  return result
}

module.exports = generateParenthesis

console.info(generateParenthesis(3))
