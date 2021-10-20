/*
 归并算法： 找到中间节点 然后分别排序，最后合并
 */
const sort = function (A) {
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
 * 1 4 5 8 2 3 6 7
 *   l   p     r
 *
 * 1 2 3 4 5 8 6 7
 *   l   p   p r
 *
 * p = r - 1
 *
 * 总体的思路就是 当 a[l] > a[r] 时，平移数组
 * 1. 找到 pivot
 * 2. 循环
 *
 *
 *  - array[l] <= array[r] => l++ 不管
 *  - array[l] > array[r] => r++
 *
 *  平移 l, p, r - 1
 *
 *  k = r - 1 - p
 *  l += k
 *  p += p
 *
 * 1 2 3 4 5 8 6 7
 *
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
  const pivot = left + ((right - left) >> 1)
  let [l, r, p] = [left, pivot + 1, pivot]
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
