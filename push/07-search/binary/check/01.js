/**
 *
 * @param array
 * @param key
 */
function search(array, key) {
  let left = 0
  let right = array.length - 1
  while (left <= right) {
    let mid = parseInt((right + left) / 2)
    if (array[mid] === key) {
      return mid
    } else if (key < array[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}

module.exports = search
