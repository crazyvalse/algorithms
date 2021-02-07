/*
选择排序

1. 找到最小的下标， 然后交换i的位置
 */

module.exports = function (array) {
  //
  let min = null
  for (let i = 0; i < array.length; i++) {
    min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j
      }
    }
    ;[array[min], array[i]] = [array[i], array[min]]
  }
  return array
}
