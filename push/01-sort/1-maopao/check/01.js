/**
 * 冒泡思路
 * 比较两个数的大小 后面的小就交换直到最后一位
 */
function sort(A, reverse) {
  for (let length = A.length; length > 0; length--) {
    for (let i = 1; i < length; i++) {
      if (A[i] < A[i - 1]) {
        swap(A, i - 1, i)
      }
    }
  }
  return reverse ? A.reverse() : A
}

function swap(array, a, b) {
  array[a] = array[a] ^ array[b]
  array[b] = array[a] ^ array[b]
  array[a] = array[a] ^ array[b]
}

module.exports = sort
