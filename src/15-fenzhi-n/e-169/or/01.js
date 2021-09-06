/*
给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 n/2 的元素
你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1：
输入：[3,2,3]
输出：3

示例 2：
输入：[2,2,1,1,1,2,2]
输出：2

进阶：

尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 */
/**
 * 分治算法 - 先用多余的数组来计算
 * 分成一半 分别计算
 *
 * left： 2 2 1
 * right: 1 1 2 2
 *
 * left: 2
 * right 2 1
 *
 *
 * 1. 停止条件
 * if(left === right){
 *   return array[left]
 * }
 *
 * 2. 返回值
 * 选择出计算出来最大的那个值
 *
 * 3. 每一步的公式
 *
 * 1. 分成两部分
 * 2. 两边各自选出出现次数最大的那个值
 * 如果一样的话就选出右侧的，肯定会有一个大数在右侧
 *
 * 4. 参数
 *
 * nums, left, right
 *
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const walk = function (nums, left, right) {
    if (left === right) {
      return nums[left]
    }

    const pivot = left + ((right - left) >>> 1)
    const leftMajorityNum = walk(nums, left, pivot)
    const rightMajorityItem = walk(nums, pivot + 1, right)

    if (leftMajorityNum === rightMajorityItem) {
      return leftMajorityNum
    }

    const leftMajorityCounter = getCounter(nums, leftMajorityNum, left, right)
    const rightMajorityCounter = getCounter(nums, rightMajorityItem, left, right)

    return leftMajorityCounter > rightMajorityCounter ? leftMajorityNum : rightMajorityItem
  }

  function getCounter(nums, num, left, right) {
    let counter = 0
    let i = left
    while (i <= right) {
      if (nums[i] === num) {
        counter++
      }
      i++
    }
    return counter
  }

  return walk(nums, 0, nums.length - 1)
}

module.exports = majorityElement
