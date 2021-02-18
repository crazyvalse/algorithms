/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

示例 1：
输入：s = "()"
输出：true

示例 2：
输入：s = "()[]{}"
输出：true

示例 3：
输入：s = "(]"
输出：false

示例 4：
输入：s = "([)]"
输出：false

示例 5：
输入：s = "{[]}"
输出：true
 

提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const n = s.length
  // 被2除不尽，说明肯定不对
  if (n % 2 === 1) {
    return false
  }

  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])

  const stk = []

  s.split('').forEach((ch) => {
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false
      }
      stk.pop()
    } else {
      stk.push(ch)
    }
  })
  return !stk.length
}

module.exports = isValid
