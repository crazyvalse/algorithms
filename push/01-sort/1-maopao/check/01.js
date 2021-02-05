/**
 * 冒泡思路
 * 1. 从第一项开始比较前后两个值的大小，如果 array[i - 1] > array[i] 交换
 *  - 从 i = 1  i ++ < length
 * 2. 减小 length的长度
 */
function sort(array, reverse) {
  for (let j = array.length; j > 0; j--) {
    for (let i = 1; i < j; i++) {
      const condition = reverse ? array[i - 1] < array[i] : array[i - 1] > array[i]
      if (condition) {
        ;[array[i - 1], array[i]] = [array[i], array[i - 1]]
      }
    }
  }
  return array
}

module.exports = sort
