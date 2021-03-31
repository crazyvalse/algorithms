/**
 * 算是分治算法
 * @param array
 * @param key
 */
function search(array, key) {
  function walk(left, right) {
    if (left > right) {
      return -1
    }
    const pivot = left + ((right - left) >>> 1)
    if (array[pivot] === key) {
      return pivot
    } else if (array[pivot] > key) {
      return walk(left, pivot - 1)
    } else {
      return walk(pivot + 1, right)
    }
  }
  return walk(0, array.length - 1)
}

module.exports = search
