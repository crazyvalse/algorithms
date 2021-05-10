/*
 归并算法
 */
function sort(array) {
  const walk = function (left = 0, right = array.length - 1) {
    if (left >= right || array.length === 0) {
      return
    }
    const pivot = left + ((right - left) >>> 1)
    walk(left, pivot)
    walk(pivot + 1, right)
    merge(array, left, right)
  }
  walk(0, array.length - 1)
  return array
}

/**
 * 1, 3, 5, 6, 1, 2, 3, 4
 * 0  1  2  3  4  5  6  7
 * 1, 1, 2, 3, 5, 6, 3, 4
 *             l = 4
 * 1. 找到pivot
 * 2. r：找到右节点： if(array[r] < array[l]) {  }
 */
function merge(array, left, right) {
  let l = left
  let pivot = left + ((right - left) >>> 1)
  let r = pivot + 1
  while (l < r && r <= right) {
    // 当前面小，而后面大的时候，前面的数据不需要动。
    while (array[l] <= array[r] && l < r) {
      l++
    }
    pivot = r - 1
    // 当后面的小，需要记录
    // 不用管相等的
    while (array[l] > array[r] && r <= right) {
      r++
    }
    if (l < r - 1) {
      converse(array, l, pivot, r - 1)
      l = l + r - pivot
    }
  }
  return array
}

// 平移数组
function converse(array, left, pivot, right) {
  reverse(array, left, pivot)
  reverse(array, pivot + 1, right)
  reverse(array, left, right)
  return array
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
module.exports = {
  reverse,
  converse,
  merge,
  sort
}
