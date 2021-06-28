/**
 * 冒泡思路
 * 比较两个数的大小 后面的小就交换直到最后一位
 */
function sort(array, reverse) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 1; j < i; j++) {
      if (array[j] < array[j - 1]) {
        swap(array, j - 1, j)
      }
    }
  }
  return reverse ? array.reverse() : array
}

function swap(array, a, b) {
  array[a] = array[a] ^ array[b]
  array[b] = array[a] ^ array[b]
  array[a] = array[a] ^ array[b]
}

module.exports = sort
