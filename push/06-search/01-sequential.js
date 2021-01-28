function search(array, key) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      return i
    }
  }
  return -1
}

module.exports = search
