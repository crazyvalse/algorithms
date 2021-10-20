/*
 归并算法: 上一个有点问题 就是merge数组的时候，每次颠倒两次排一位，能不能多排几位呢？
 */

module.exports = sort

function sort(array, left = 0, right = array.length - 1) {
  if (left >= right || array.length <= 1) {
    return
  }

  const pivot = Math.floor(left + (right - left) / 2)
  sort(array, left, pivot)
  sort(array, pivot + 1, right)
  merge(array, left, right)
}

/**
 * 移动窗口
 * 1, 3, 5, 6, 1, 2, 3, 4
 * 1, [1, 2, 3], 3, 5, 6, 4
 * @param array
 * @param left
 * @param right
 */
function merge(array, left, right) {
  let l = left
  let pivot = left + ((right - left) >>> 1)
  let r = pivot + 1
  while (l < r && r <= right) {
    while (l < r && array[l] <= array[r]) {
      l++
    }
    pivot = r - 1
    while (r <= right && array[r] < array[l]) {
      r++
    }
    if (l < r - 1) {
      converse(array, l, pivot, r - 1)
      l = r - pivot - 1
    }
  }
  return array
}

/**
 * 一个数组，从left 到right排序
 * [3,5,6,1,2,4]
 *
 * left = 0, pivot = 2, right= 4
 *
 * 1. reverse(array, l, pivot) 6, 5, 3, 1, 2, 4;
 * 2. reverse(array, l, r)
 *
 * @param array
 * @param left
 * @param pivot
 * @param right
 */
function converse(array, left, pivot, right) {
  reverse(array, left, pivot)
  reverse(array, pivot + 1, right)
  reverse(array, left, right)
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

console.info(merge([1, 2, 4, 5, 6, 1, 2, 3, 3], 2, 4, 7))

module.exports = {
  reverse,
  converse,
  merge,
  sort
}
