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
 *
 * https://leetcode-cn.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solution/hua-dong-chuang-kou-chao-hao-li-jie-de-ti-jie-ding/
 *
 * 滑动窗口
 *
 * 1. 先做窗口
 * for i = 0,...,k - 1
 *  total += getVowelNum(s[i])
 *
 * 2. 滑动窗口
 * for i = k; i < s.length; i ++
 *  total -= getV(s[i - k])
 *  total += getV(s[i])
 *  max = Max(max, total)
 *  if(total === k){
 *    return total
 *  }
 *
 * return max
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

  // 1. 先做窗口
  let total = 0
  for (let i = 0; i < k; i++) {
    total += getVowelNum(s[i])
  }

  let max = total

  for (let i = k; i <= s.length; i++) {
    total -= getVowelNum(s[i - k])
    total += getVowelNum(s[i])

    max = Math.max(max, total)
    if (max === k) {
      return max
    }
  }
  return max
}

module.exports = maxVowels
