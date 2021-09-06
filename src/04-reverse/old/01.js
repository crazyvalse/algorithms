module.exports = reverse

function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

function reverse(array) {
  for (let i = 0, length = array.length / 2; i < length; i++) {
    swap(array, i, array.length - i - 1)
  }
  return array
}
