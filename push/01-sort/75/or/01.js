/*
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
示例 1：

输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]

示例 2：

输入：nums = [2,0,1]
输出：[0,1,2]

示例 3：

输入：nums = [0]
输出：[0]

示例 4：

输入：nums = [1]
输出：[1]

提示：

n == nums.length
1 <= n <= 300
nums[i] 为 0、1 或 2

进阶：

你可以不使用代码库中的排序函数来解决这道题吗？
你能想出一个仅使用常数空间的一趟扫描算法吗？
 */
/**
 * 选择排序 - 找到最小项的索引，然后交换位置
 *
 * for i = 0,...,length; i ++
 *  let point = i
 *  for j = i + 1,...,length; j ++
 *    if(array[point] > array[j]) point = j
 *  swap(array, point, j)
 * return array
 * @param array
 * @returns {*}
 */
var sortColors = function (array) {
  let point
  for (let i = 0, length = array.length; i < length; i++) {
    point = i
    for (let j = i + 1; j < length; j++) {
      if (array[point] > array[j]) {
        point = j
      }
    }
    swap(array, point, i)
  }
  return array
}

function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

module.exports = sortColors
