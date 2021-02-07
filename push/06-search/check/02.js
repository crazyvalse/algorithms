/**
 * 二分法
 * 1. 找mid 0 + 10 / 2 = 5; 9 / 2 = 4 找中间索引
 * 2. 最后 left <= right 为了最后在left和right中选择一个
 * 3. 四个判断
 * @param array
 * @param key
 * @returns {number}
 */
function search(array, key) {
  let left = 0
  let right = array.length
  let mid = null
  while (left <= right) {
    mid = parseInt((left + right) / 2)
    if (array[mid] < key) {
      left = mid + 1
    } else if (key < array[mid]) {
      right = mid - 1
    } else if (key === array[mid]) {
      return mid
    } else {
      return -1
    }
  }
  return -1
}

module.exports = search
