/*
 归并算法
 */

module.exports = sort

function sort(array) {}

/**
 * 1, 3, 5, 6, 1, 2, 3, 4
 * 0  1  2  3  4  5  6  7
 */
function merge(array, left, right) {
  let l = left
  let pivot = left + ((right - left) >>> 1)
  let r = pivot
  while (l < r && r <= right) {
    while (array[l] > array[r]) {
      l++
    }
    pivot = r - 1
    while (array[l] <= array[r]) {
      r++
    }
    converse(array, l, pivot, r - 1)
  }
  return array
}

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
const array = [1, 3, 5, 6, 1, 2, 3, 4]
console.info(merge(array, 0, array.length - 1))
