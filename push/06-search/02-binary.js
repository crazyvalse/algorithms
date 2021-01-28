function search(array, key) {
  let low = 0
  let high = array.length
  let mid = null
  while (low <= high) {
    mid = parseInt((low + high) / 2)
    // 如果中间值比key大 high = mid - 1
    if (key < array[mid]) {
      high = mid - 1
    } else if (key > array[mid]) {
      low = mid + 1
    } else if (key === array[mid]) {
      return mid
    } else {
      return -1
    }
  }
  return -1
}

module.exports = search

console.info(search([1, 2, 3, 4, 5, 6, 7, 8], 134))
