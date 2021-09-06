/**
 * 冒泡思路
 * 比较两个数的大小 后面的小就交换直到最后一位
 */
function sort(array, reverse) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length - i; j++) {
      if (array[j] < array[j - 1]) {
        swap(array, j, j - 1)
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
