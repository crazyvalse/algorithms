/*
131. 分割回文串

给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
回文串 是正着读和反着读都一样的字符串。

示例 1：
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]

示例 2：
输入：s = "a"
输出：[["a"]]

- 1 <= s.length <= 16
- s 仅由小写英文字母组成
 */

/**
 * 1. 选取子字符串
 * 2. 判断回文
 *  - 是的话就放到cart中
 *  - 不是的话，忽略
 * 3. 是回文的话，处理剩下的字符串
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = []
  const walk = function (index, cart) {
    if (index === s.length) {
      result.push(cart.slice())
      return
    }
    let current = ''
    for (let i = index; i < s.length; i++) {
      current = s.substring(index, i + 1)
      if (isLoop(current)) {
        cart.push(current)
        walk(i + 1, cart)
        // 需要撤销当前的选择，回到选择前的状态，查看另外一种选择是什么样的
        cart.pop()
      }
    }
  }
  walk(0, [])
  return result
}

const cache = {}
function isLoop(s) {
  if (cache[s] !== undefined) {
    return cache[s]
  }
  let left = 0
  let right = s.length - 1
  while (left < right) {
    if (s[left] !== s[right]) {
      cache[s] = false
      return false
    }
    left++
    right--
  }
  cache[s] = true
  return true
}

console.info(partition('aba'))

module.exports = partition
