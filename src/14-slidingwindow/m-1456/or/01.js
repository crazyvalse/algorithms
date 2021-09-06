/*
给你字符串 s 和整数 k 。

请返回字符串 s 中长度为 k 的单个子字符串中可能包含的最大元音字母数。

英文中的 元音字母 为（a, e, i, o, u）。



示例 1：

输入：s = "abciiidef", k = 3
输出：3
解释：子字符串 "iii" 包含 3 个元音字母。
示例 2：

输入：s = "aeiou", k = 2
输出：2
解释：任意长度为 2 的子字符串都包含 2 个元音字母。
示例 3：

输入：s = "leetcode", k = 3
输出：2
解释："lee"、"eet" 和 "ode" 都包含 2 个元音字母。
示例 4：

输入：s = "rhythms", k = 4
输出：0
解释：字符串 s 中不含任何元音字母。
示例 5：

输入：s = "tryhard", k = 4
输出：1


提示：

1 <= s.length <= 10^5
s 由小写英文字母组成
1 <= k <= s.length
 */

/**
 * 思路：快慢指针
 * 当超出k的时候，l 开始 ++ 维持圈子是 k
 *
 * 踢出 l，并判断 l是不是元音，是的话 total就--，否则不做处理
 * 判断 f++ 是不是元音 是的话 total就 ++
 *
 * 最后判断
 *
 * let total
 * let max = 0
 * map: {
 *
 * }
 *
 * 解决四个问题
 * 1. l与f的加减问题
 * // 0 1 2 2-0+1 === k
 *
 * 2. total的计算问题
 * total += getVowelsNum(f)
 * if(f - l + 1 === k)
 *  total -= getVowelsNum(l)
 *   l++
 * // 计算max
 * max = Max(max, total)
 * f++
 *
 * // 获得元音个数
 *
 * function getVowelsNum(char){
 *   return map[char] ? 1 : 0
 * }
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const map = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  }
  function getVowelNum(char) {
    return map[char] ? 1 : 0
  }
  let slow = 0
  let fast = 0
  let max = 0
  let total = 0
  while (fast < s.length) {
    total += getVowelNum(s[fast])
    if (fast - slow === k) {
      total -= getVowelNum(s[slow])
      slow++
    }
    max = Math.max(max, total)
    if (max === k) {
      break
    }
    fast++
  }
  return max
}

module.exports = maxVowels
