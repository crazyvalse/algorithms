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
 * 前后两个指针 p0 指向 0； p2 指向 2
 * 所以：
 * all in [0, p0) === 0
 * all in [p0, i) === 1
 * all in (p2, len - 1] === 2
 *
 * 0         2
 * 0,0,2,1,1,2
 * i
 * @param array
 * @returns {*}
 */
var sortColors = function (array) {
  const length = array.length
  if (length < 2) {
    return array
  }
  let p0 = 0
  let p2 = length - 1
  let i = 0

  while(i <= p2){
    // 当等于 0 的时候，交换 p0 与 i 的位置
    if (array[i] === 0) {
      // p0 位置绝对是 1，所以 i ++
      swap(array, p0++, i++)
    } else if (array[i] === 2) {
      // 当等于 2 的时候
      swap(array, p2--, i)
    } else if (array[i] === 1) {
      i++
    }
  }
  return array
}

function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

console.info(sortColors([2, 0, 2, 1, 1, 0]))

module.exports = sortColors
