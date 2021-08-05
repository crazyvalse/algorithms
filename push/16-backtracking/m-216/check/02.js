/*
216. 组合总和 III

找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
说明：
所有数字都是正整数。
解集不能包含重复的组合。

示例 1:
输入: k = 3, n = 7
输出: [[1,2,4]]

示例 2:
输入: k = 3, n = 9
输出: [[1,2,6], [1,3,5], [2,3,4]]

 */
/**
 *
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = []
  const length = n > 10 ? 10 : n
  const walk = function (index, cart, sum) {
    if (cart.length === k && sum === n) {
      result.push(cart.slice())
    }

    for (let i = index; i < length; i++) {
      if (sum < n) {
        cart.push(i)
        walk(i + 1, cart, sum + i)
        cart.pop()
      }
    }
  }
  walk(1, [], 0)
  return result
}

console.info(combinationSum3(3, 9))
