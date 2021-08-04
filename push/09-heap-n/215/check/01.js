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
 * 最大堆
 * 1. 组建最大堆
 * 2. 排序 只排 k - 1 是索引 即可 A[0]
 * @param {number[]} a
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (a, k) {
  if (!Array.isArray(a) || a.length === 0) {
    return null
  }

  if (a.length === 0 && k === 1) {
    return a[0]
  }

  initMaxHeap(a)
  return getKthLargest(a, k)
}

/**
 * 1. 找到第一个父节点
 * 2. 从后向前构建最大堆
 * @param a
 */
function initMaxHeap(a) {
  const n = a.length
  const pi = (n + 1) >> 1
  for (let i = pi; i >= 0; i--) {
    heapify(a, i, n)
  }
}

/**
 * 1、把 0 与 与最后一个交换
 * @param a
 * @param k
 * @returns {number}
 */
function getKthLargest(a, k) {
  const n = a.length - 1
  for (let l = n; l > n - k + 1; l--) {
    ;[a[0], a[l]] = [a[l], a[0]]
    heapify(a, 0, l)
  }
  return a[0]
}

/**
 * 1. 找到子节点索引
 * 2. 判断大小
 * 3. 确定临时索引是否跟c相等
 * 4. 不相等 交换，并处理交换的节点
 * @param array
 * @param index
 * @param length
 */
function heapify(array, index, length) {
  if (length < 2) {
    return
  }
  const [leftChildIndex, rightChildIndex] = [index * 2 + 1, index * 2 + 2]
  let standIndex = index
  if (leftChildIndex < length && array[standIndex] < array[leftChildIndex]) {
    standIndex = leftChildIndex
  }
  if (rightChildIndex < length && array[standIndex] < array[rightChildIndex]) {
    standIndex = rightChildIndex
  }

  if (standIndex !== index) {
    ;[array[standIndex], array[index]] = [array[index], array[standIndex]]
    heapify(array, standIndex, length)
  }
}

module.exports = findKthLargest
