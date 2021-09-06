/*
 归并算法
 */

module.exports = sort

function sort(array, left = 0, right = array.length) {
  if (left >= right || array.length <= 1) {
    return
  }

  const pivot = left + ((right - left) >>> 1)
  sort(array, left, pivot)
  sort(array, pivot + 1, right)
  merge(array, left, right)
}

// 原地 merge
/**
 * 停止条件： l < array.length
 * 1. 左边小 l ++ 直到 右边大
 *  - converse()
 * @param array
 * @param left
 * @param right
 */
function merge(array, left, right) {
  let l = left
  let r = left + ((right - left) >>> 1) + 1
  while (l < r && r <= right) {
    if (array[l] > array[r]) {
      converse(array, l, r++)
    }
    l++
  }
  return array
}

/**
 * 一个数组，从left 到right排序
 * [3,5,6,1,2,4] 0...5 = 2
 *
 * 1. reverse(array, l, pivot) 6, 5, 3, 1, 2, 4;
 * 2. reverse(array, l, r)
 *
 * @param array
 * @param left
 * @param pivot
 */
function converse(array, left, pivot) {
  reverse(array, left, pivot - 1)
  reverse(array, left, pivot)
}

function reverse(array, left, right) {
  let l = left
  let r = right
  while (l < r) {
    ;[array[l], array[r]] = [array[r], array[l]]
    l++
    r--
  }
}

// console.info(merge([1, 2, 4, 5, 6, 1, 2, 3, 3], 2, 4, 7))

module.exports = {
  reverse,
  converse,
  merge,
  sort
}
