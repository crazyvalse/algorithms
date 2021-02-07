function reverse(array) {
  const length = Math.floor(array.length / 2)
  for (let i = 0; i < length; i++) {
    array[i] = array[i] ^ array[array.length - 1 - i]
    array[array.length - 1 - i] = array[i] ^ array[array.length - 1 - i]
    array[i] = array[i] ^ array[array.length - 1 - i]
  }
  return array
}

module.exports = reverse
