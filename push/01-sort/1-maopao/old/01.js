/*
冒泡
1.
for i=length-1 ,..., 0 作为外层倒叙
  for j = 0 ... i 比较大小
    if a[j] > a[j + 1] swap
 */

function maopao(array, isReversed) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return isReversed ? array.reverse() : array
}

module.exports = maopao
