/**
 * 二分法查找
 * 先找一半
 * @param array
 * @param key
 */
function search(array, key) {
  let [l, r] = [0, array.length - 1]
  while (l <= r) {
    const pivot = l + ((r - l) >> 1)
    if (array[pivot] === key) {
      return pivot
    } else if (array[pivot] > key) {
      r = pivot - 1
    } else {
      l = pivot + 1
    }
  }
  return -1
}

module.exports = search
