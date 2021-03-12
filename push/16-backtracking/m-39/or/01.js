/*
39. 组合总和
给定一个无重复元素的数组candidates和一个目标数target，找出candidates中所有可以使数字和为target的组合。

candidates中的数字可以无限制重复被选取。

说明：
所有数字（包括target）都是正整数。
解集不能包含重复的组合。
示例1：

输入：candidates = [2,3,6,7], target = 7,
所求解集为：
[
  [7],
  [2,2,3]
]
示例2：

输入：candidates = [2,3,5], target = 8,
所求解集为：
[
 [2,2,2,2],
 [2,3,3],
 [3,5]
]
 */
/**
 * 1. 出口
 * if sum === target
 * result.push(cart.slice())
 *
 * for(i = 0; i < candidates.length; i ++) {
 *   if (sum < target){
 *
 *   }
 * }
 *
 * 2. 参数
 * 3. 递归过程
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = []
  const walk = function (index, cart, sum) {
    if (sum > target) {
      return
    }
    if (sum === target) {
      result.push(cart.slice())
      return
    }
    for (let i = index; i < candidates.length; i++) {
      if (sum < target) {
        cart.push(candidates[i])
        walk(i, cart, sum + candidates[i])
        cart.pop()
      }
    }
  }
  walk(0, [], 0)
  return result
}

console.info(combinationSum([2, 3, 6, 7], 7))
console.info(combinationSum([2, 3, 5], 8))
