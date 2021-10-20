/*
 归并算法： 找到中间节点 然后分别排序，最后合并
 */
const sort = function (A) {
  const walk = function (l, r) {
    if (l >= r) {
      return
    }
    const pivot = l + ((r - l) >>> 1)
    walk(l, pivot)
    walk(pivot + 1, r)
    merge(A, l, r)
  }
  walk(0, A.length - 1)
  return A
}

/**
 * 1 4 5 8 2 3 6 7
 *   l   p     r
 *
 * 1 2 3 4 5 8 6 7
 *   l   l     r
 *  l += r - p
 * - 当 al < ar 时 l++
 * - 调整p 不然就丢失了
 * - 当 ar <= al 时 r++
 * converse(array, l, pivot, r - 1)
 *
 * 需要把后面的调到前面
 *
 * @param array
 * @param left
 * @param right
 */
const merge = function (array, left, right) {
  if (array.length <= 1 || left >= right) {
    return
  }
  let p = left + ((right - left) >>> 1)
  let l = left
  let r = p + 1
  while (l < r) {
    while (array[l] <= array[r] && l < r) {
      l++
    }
    p = r - 1
    while (array[l] > array[r] && r <= right) {
      r++
    }
    converse(array, l, p, r - 1)
    l += r - p
  }
  return array
}

/**
 * 4 5 6 7 1 2 3 4
 *   l       r
 * k = 2
 * @param array
 * @param left
 * @param right
 * @param pivot 是第一个队列的队尾 第二队列的前一个
 * @returns {*}
 */
const converse = function (array, left, pivot, right) {
  reverse(array, left, pivot)
  reverse(array, pivot + 1, right)
  reverse(array, left, right)
  return array
}

const reverse = function (array, left, right) {
  let l = left
  let r = right
  while (l < r) {
    ;[array[l], array[r]] = [array[r], array[l]]
    l++
    r--
  }
  return array
}

module.exports = {
  reverse,
  converse,
  merge,
  sort
}
