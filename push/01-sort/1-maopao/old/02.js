/**
 * 冒泡思路
 * 1. 先排大数
 * for i = length,..., 0; i --
 *  for j = 0,...,i - 1; j ++
 *
 */
function sort(array, reverse) {
  for (let i = array.length; i > 1; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
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
