/*
 归并算法
 1. sort(left, pivot)
 2. sort(pivot + 1, right)
 merge
 */
const sort = function (A) {
  const walk = function (l, r) {
    // 相等的时候 也就是一个元素，不用处理，返回
    if (l >= r || A.length === 0) {
      return
    }
    const pivot = l + ((r - l) >>> 1)
    walk(l, pivot)
    walk(pivot + 1, r)
    merge(A, l, pivot, r)
  }
  walk(0, array.length - 1)
  return array
}

/**
 * - 当A[l] <= A[r] l < r l++
 * - 当A[r] < A[l] r <= right r++
 * @param A
 * @param left
 * @param pivot
 * @param right
 */
function merge(A, left, pivot, right) {
  let l = left
  let p = pivot
  let r = p + 1
  while (l < r && r <= right) {
    while (l < r && A[l] <= A[r]) {
      l++
    }
    p = r - 1
    while (r <= right && A[r] < A[l]) {
      r++
    }
    converse(A, l, p, r - 1)
    l += r - p
  }
  return A
}

/**
 * 1 4 5 2 3 6
 * 1 2 3 4 5 6
 * @param A
 * @param l
 * @param pivot
 * @param r
 */
function converse(A, l, pivot, r) {
  reverse(A, l, pivot)
  reverse(A, pivot + 1, r)
  reverse(A, l, r)
  return A
}

function reverse(A, l, r) {
  while (l < r) {
    ;[A[l], A[r]] = [A[r], A[l]]
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
