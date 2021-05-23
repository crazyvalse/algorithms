/**
 * 二分法查找
 * 先找一半
 * @param array
 * @param key
 */
function search(array, key) {
  let left = 0
  let right = array.length - 1
  while (left <= right) {
    const pivot = left + ((right - left) >>> 1)
    if (array[pivot] === key) {
      return pivot
    } else if (array[pivot] > key) {
      right = pivot - 1
    } else {
      left = pivot + 1
    }
  }
  return -1
}

module.exports = search
