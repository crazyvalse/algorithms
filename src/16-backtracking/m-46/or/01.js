/*
46. 全排列

给定一个 没有重复 数字的序列，返回其所有可能的全排列。
示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

 */
/**
 * length 个坑
 *
 * 每个坑有 length - 1 个选择
 *
 * 1. 出口
 * 2. 参数
 * bucketIndex 坑位
 * container
 * 3. 递归过程
 * 始终是从 0开始
 * for i = 0,...,length - 1
 * if(container.indexOf(nums[i])){
 *   continue
 * }
 * push(nums[i])
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = []
  const length = nums.length
  const walk = function (bucketIndex, container) {
    if (container.length === length) {
      result.push(container.slice())
      return
    }
    for (let i = 0; i < length; i++) {
      if (container.indexOf(nums[i]) !== -1) {
        continue
      }
      container.push(nums[i])
      walk(bucketIndex + 1, container)
      container.pop()
    }
  }
  walk(0, [])
  return result
}

console.info(permute([1, 2, 3]))
