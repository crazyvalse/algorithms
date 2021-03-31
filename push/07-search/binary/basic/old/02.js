/**
 *
 * @param array
 * @param key
 */
function search(array, key) {
  function walk(array, key, left, right) {
    if (left > right) {
      return -1
    }
    let mid = parseInt((left + right) / 2)
    if (array[mid] < key) {
      return walk(array, key, mid + 1, right)
    } else if (array[mid] > key) {
      return walk(array, key, left, mid - 1)
    } else {
      return mid
    }
  }
  return walk(array, key, 0, array.length - 1)
}

module.exports = search
