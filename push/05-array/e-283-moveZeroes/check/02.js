/*
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]

说明:
必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
 */
/**
 * 题目
 * 1. 将所有 0 移动到数组的末尾
 * 2. 保持非零元素的相对顺序
 * 思路：双指针
 * l：指向非0
 * f：指向下一位
 *
 * array[f] === 0 的话就 f++
 * array[f] !== 0 的话就 swap()
 * @param {number[]} nums
 * @return nums Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (array) {
  let counter = 0
  let l = 0
  let f = 0
  while (f < array.length - counter) {
    l = f
    if (array[f] === 0) {
      while (f < array.length && array[f] === 0) {
        f++
      }
      move(array, l, array.length - 1 - counter, f - l)
      counter += f - l
    } else {
      f++
    }
  }
  return array
}

const move = function (array, l, r, k) {
  reverse(array, l, l + k - 1)
  reverse(array, l + k, r)
  reverse(array, l, r)
  return array
}
const reverse = function (array, l, r) {
  while (l < r) {
    ;[array[l], array[r]] = [array[r], array[l]]
    l++
    r--
  }
}

module.exports = moveZeroes
