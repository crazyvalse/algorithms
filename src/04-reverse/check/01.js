module.exports = reverse

function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

function reverse(array) {
  let left = 0
  let right = array.length - 1
  while (left < right) {
    swap(array, left++, right--)
  }
  return array
}
