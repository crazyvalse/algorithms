/*
计算 1 到 100 的总和
 */

// function sum(nums) {
//   function recursive(nums) {
//     if (nums.length === 0) {
//       return 0
//     }
//
//     return nums.pop() + recursive(nums)
//   }
//   return recursive(nums)
// }

function sum(nums, i = nums.length - 1) {
  if (i < 0) {
    return 0
  }
  return nums[i--] + sum(nums, i)
}

module.exports = sum
