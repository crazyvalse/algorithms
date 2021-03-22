/*
给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。
对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

示例：

输入：nums: [1, 1, 1, 1, 1], S: 3
输出：5
解释：

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

一共有5种方法让最终目标和为3。
提示：

数组非空，且长度不会超过 20 。
初始的数组的和不会超过 1000 。
 */

module.exports = find

function find(nums, S) {
  let len = nums.length
  let arr = []
  arr[0] = {}
  if (nums[0] === 0) {
    arr[0][0] = 2
  } else {
    let sum = nums[0]
    let subt = -nums[0]
    arr[0][sum] = 1
    arr[0][subt] = 1
  }
  for (let i = 1; i < len; i++) {
    arr[i] = {}
    for (let key in arr[i - 1]) {
      let sum = parseInt(key) + nums[i]
      let subt = parseInt(key) - nums[i]
      let last = arr[i - 1][key]
      if (arr[i][sum] === undefined) {
        arr[i][sum] = last
      } else {
        arr[i][sum] += last
      }
      if (arr[i][subt] === undefined) {
        arr[i][subt] = last
      } else {
        arr[i][subt] += last
      }
    }
  }
  console.info(arr)
  return arr[len - 1][S] ? arr[len - 1][S] : 0
}

find([1, 1, 1, 1, 1], 3)
