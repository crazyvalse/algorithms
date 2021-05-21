/*
  在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
  示例 1:
  输入: [3,2,1,5,6,4] 和 k = 2
  输出: 5

  示例 2:
  输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
  输出: 4

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
说明:
  你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
 */
/**
 * 冒泡
 * 选择排序
 * 插入
 * 堆排序
 *
 * @param {number[]} A
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (A, k) {
  const n = A.length
  if (n === 0) {
    return null
  }
  if (n === 1 && k === 1) {
    return A[0]
  }
  // 初始化最大堆
  const pivot = n >>> 1
  for (let i = pivot; i >= 0; i--) {
    heapify(A, i, n)
  }

  for (let i = n - 1; i >= n - k + 1; i--) {
    swap(A, 0, i)
    heapify(A, 0, i)
  }
  return A[0]
}

function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

/**
 * 1. 先找子节点
 * 2. 比较大小
 * 3. 如果父节点不是最大的，调换顺序
 * 4. 处理受到影响的子节点
 * @param array
 * @param root
 * @param length
 */
function heapify(array, root, length) {
  if (array.length <= 1 || length <= 1) {
    return
  }
  let c = root
  let l = c * 2 + 1
  let r = c * 2 + 2
  if (l < length && array[l] > array[c]) {
    c = l
  }
  if (r < length && array[r] > array[c]) {
    c = r
  }
  if (c !== root) {
    ;[array[c], array[root]] = [array[root], array[c]]
    heapify(array, c, length)
  }
}

module.exports = findKthLargest
