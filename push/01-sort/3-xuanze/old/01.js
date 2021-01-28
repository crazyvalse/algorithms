/*
选择排序
1. 遍历数组找到 最小的索引
2. 交换位置
3. 最外层的遍历，let i =0 i++
 */

function sort(array) {
  let min = null
  for (let i = 0, length = array.length; i < length; i++) {
    min = i
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    swap(array, i, min)
  }
  return array
}

function swap(array, i, j) {
  ;[array[i], array[j]] = [array[j], array[i]]
}

module.exports = sort
