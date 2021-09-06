/**
 * 选择排序
 * 1. 找到最小的下标， 然后交换i的位置
 * index if(array[i] > array[j]) 交换
 */
function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

/**
 * 找到最小的值交换
 * 两层遍历
 * 第一层确定数组的位置
 * 第二层是 找到最小的
 * 然后交换与第一层的位置
 *
 * @param array
 * @returns {*}
 */
module.exports = function (array) {
  for (let i = 0; i < array.length; i++) {
    let min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    swap(array, i, min)
  }
  return array
}
