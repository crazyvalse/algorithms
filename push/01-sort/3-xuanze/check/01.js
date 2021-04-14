/**
 * 选择排序
 * 1. 找到最小的下标， 然后交换i的位置
 * index if(array[i] > array[j]) 交换
 * @param array
 */

function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

/**
 * 找到最小的值交换
 * @param array
 * @returns {*}
 */
module.exports = function (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        swap(array, i, j)
      }
    }
  }
  return array
}
