/*
40. 组合总和 II

给定一个数组candidates和一个目标数target，找出candidates中所有可以使数字和为target的组合。

candidates中的每个数字在每个组合中只能使用一次。

说明：

所有数字（包括目标数）都是正整数。
解集不能包含重复的组合。

示例1:
输入: candidates =[10,1,2,7,6,1,5], target =8,
所求解集为:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]

示例2:
输入: candidates =[2,5,2,1,2], target =5,
所求解集为:
[
 [1,2,2],
 [5]
]

 */
/**
 * @param {number[]} a
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (a, target) {
  const result = []
  a.sort()
  const walk = function (index, cart, total) {
    if (total >= target) {
      if (total === target) {
        result.push(cart.slice())
      }
      return
    }
    for (let i = index; i < a.length; i++) {
      if (i - 1 >= index && a[i] === a[i - 1]) {
        continue
      }
      cart.push(a[i])
      walk(i + 1, cart, total + a[i])
      cart.pop()
    }
  }
  walk(0, [], 0)
  return result
}

console.info(combinationSum2([2, 5, 2, 1, 2], 5))
