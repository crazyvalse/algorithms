/*
 归并算法： 找到中间节点 然后分别排序，最后合并
 >>>>>>>>>>
 重要

 */
const sort = function (A) {
  if (A.length < 2) {
    return A
  }
  const walk = function (l, r) {
    if (l >= r) {
      return
    }
    const pivot = l + ((r - l) >> 1)
    walk(l, pivot)
    walk(pivot + 1, r)

    merge(A, l, r)
  }
  walk(0, A.length - 1)
  return A
}

/**
 * 两个数组
 * 1 4 6 8 2 3 4 7
 *   l   p       r
 * 0 1 2 3 4 5 6 7
 *
 * 1 2 3 4 4 6 8 7
 *   l   =>l     r
 * 1. p 重新定位
 * 2. l 重新定位
 * l = r - p - 1 7 - 3 1 + 4 - 1
 * p = r - 1
 * 当 (al < ar && l <= r) l++
 * 当 (al >= ar && r < right) r++
 *
 * converse(l, p, r - 1)
 * 需要把后面的调到前面
 * @param a
 * @param left
 * @param right
 */
const merge = function (a, left, right) {
  if (a.length <= 1 || left >= right) {
    return
  }
  let p = left + ((right - left) >> 1)
  let l = left
  let r = p + 1
  while (l < r) {
    while (a[l] <= a[r] && l < r) {
      l++
    }
    p = r - 1
    while (a[l] > a[r] && r <= right) {
      r++
    }
    converse(a, l, p, r - 1)
    l += r - p
  }
}

/**
 * 4 5 6 7 1 2 3 4
 *   l   p   r
 * k = 2
 * @param array
 * @param left
 * @param right
 * @param pivot 是第一个队列的队尾 第二队列的前一个
 * @returns {*}
 */
const converse = function (array, left, pivot, right) {
  if (left >= right) {
    return
  }
  reverse(array, left, pivot)
  reverse(array, pivot + 1, right)
  reverse(array, left, right)
}

const reverse = function (array, left, right) {
  while (left < right) {
    ;[array[left], array[right]] = [array[right], array[left]]
    left++
    right--
  }
}

module.exports = {
  reverse,
  converse,
  merge,
  sort
}
