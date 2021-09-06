/*
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
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
 * [2,0,2,1,1,0]
 * 快慢指针
 * p0 指向 0
 * p2 指向 2
 *
 * 0 : [0, p0)
 * 1 : [p0, next)
 * 2 : (p2, length - 1]
 *
 * while(next >= p2){
 *  if(array[next] === 0){
 *    swap(array, p0++, next)
 *  }
 *  if(array[next] === 2) {
 *    swap(array, next, p2--)
 *  }
 *  next++
 * }
 *  p0    p2
 * [2, 1, 0]
 * [0, 1, 2]
 *
 * 如果是2的话，swap(p2)，但 next并不加1， 需要再次判断
 * 如果是0的话，swap(p0)，这个时候 p0绝对是1，并且，p0前进 next也需要前进
 * [1, 0, 0, 2]
 *
 * @param array
 * @returns {*}
 */
var sortColors = function (array) {
  if (array.length < 2) {
    return array
  }
  let p0 = 0
  let p2 = array.length - 1
  let next = 0
  while (next < array.length && p0 <= p2) {
    if (array[next] === 0) {
      swap(array, next, p0++)
    } else if (array[next] === 2) {
      swap(array, next--, p2--)
    }
    next++
  }
  return array
}

function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

module.exports = sortColors
