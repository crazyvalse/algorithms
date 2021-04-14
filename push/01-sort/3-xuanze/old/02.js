/**
 * 选择排序
 * 1. 找到最小的下标， 然后交换i的位置
 * index if(array[i] > array[j]) 交换
 * @param array
 */

function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

module.exports = function (array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j
      }
    }
    swap(array, i, min)
  }
  return array
}
