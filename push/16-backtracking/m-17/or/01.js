/*
给定一个仅包含数字2-9的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

示例 1：
输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

示例 2：
输入：digits = ""
输出：[]

示例 3：
输入：digits = "2"
输出：["a","b","c"]

提示：
0 <= digits.length <= 4
digits[i] 是范围 ['2', '9'] 的一个数字。
 */
/**
 * 全排列
 * for 循环 i = 0,...,currentCombinationLength
 *
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length < 1) {
    return []
  }
  const phone = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  const result = []
  const walk = function (index, cart) {
    if (cart.length === digits.length) {
      result.push(cart.join(''))
      return
    }
    const currentCombination = phone[digits[index]]
    for (let i = 0; i < currentCombination.length; i++) {
      cart.push(currentCombination[i])
      walk(index + 1, cart)
      cart.pop()
    }
  }
  walk(0, [])
  return result
}

module.exports = letterCombinations
