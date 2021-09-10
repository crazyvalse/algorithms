/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。

示例 1：

输入：s = "()"
输出：true

示例 2：

输入：s = "()[]{}"
输出：true

示例 3：

输入：s = "(]"
输出：false

 */
/*
map 放 右括号
stack = []

1. 如果碰到左括号就压到栈中
2. 碰到右括号，弹出一个对比，相等就继续，不等就 返回false

难点：
1. 判断左右括号 map[item] ? '左'

最后true
 */

function isValidate(s) {
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      stack.push(s[i])
      // 说明是右括号
    } else if (map[s[i]] !== stack.pop()) {
      return false
    }
  }
  return true
}

console.info(isValidate('(]'))
