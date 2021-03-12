/*
47. 全排列 II

给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

示例 1：
输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]

示例 2：
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

 */
/**
 * 1. 全排列
 * 2. 剪枝
 * - 判断result中有没有
 * 1. 先做个去重的数组
 * 2. for中循环这个去重的数组
 *
 *
 * 1. 出口
 * if(cart.length === length){
 *    // 处理一下
 *   result.push(cart.slice())
 * }
 *
 * for(let i = 0; i < fake.length; i++){
 *   if(cart.includes(i)){
 *     continue
 *   }
 *   cart.push(i)
 *   walk(index + 1, cart)
 *   cart.pop()
 * }
 * 2. 参数
 * index 是坑位偏移量
 * cart 存的是索引
 *
 * 3. 递归的过程
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = []
  const sortedArray = nums.slice().sort((a, b) => a - b)
  const used = Array.from({ length: nums.length }, () => false)
  const walk = function (index, cart) {
    if (cart.length === sortedArray.length) {
      result.push(cart.slice())
      return
    }
    debugger

    for (let i = 0; i < sortedArray.length; i++) {
      // 当前一个跟上一个是一样的
      if (sortedArray[i] === sortedArray[i - 1] && !used[index]) {
        continue
      }
      // 使用过了
      if (used[i]) {
        continue
      }
      cart.push(sortedArray[i])
      used[i] = true
      walk(index + 1, cart)
      cart.pop()
      used[i] = false
    }
  }
  walk(0, [])
  return result
}

console.info(permuteUnique([1, 2, 1, 1]))
