/*
 归并算法： 找到中间节点 然后分别排序，最后合并
 >>>>>>>>>>
 重要

 */
const sort = function (A) {
  if (A.length < 2) {
    return A
  }
  // 分治
  const walk = function (l, r) {
    // 3. 相等的时候 停止拆分
    if (l >= r) {
      return
    }
    // 1. 找中点
    const pivot = l + ((r - l) >> 1)
    // 2. 一分为二 继续
    walk(l, pivot)
    walk(pivot + 1, r)
    // 4. 两个有序数组合并
    merge(A, l, r, pivot)
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
 * @param pivot
 */
const merge = function (a, left, right, pivot) {
  // 数组长度小 或者 超长 或者 相等 不执行
  if (a.length <= 1 || left >= right) {
    return
  }
  // 1. 找重点
  let p = pivot
  // 2. 这是 左右起点
  let l = left
  // pivot 是偏左的
  let r = p + 1
  // l 不能超过 r，r 不会超过right
  // 内部逻辑就是找窗口：窗口左侧数组的左侧是右侧数组窗口最大值
  while (l < r) {
    // 记录p的位置，变了之后就全变了
    p = r - 1
    // 如果后面的大，不用换
    while (a[l] <= a[r] && l < r) {
      l++
    }
    // r <= right，前面的大，
    while (a[l] > a[r] && r <= right) {
      r++
    }
    // 找到后挤压 向右移动
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
