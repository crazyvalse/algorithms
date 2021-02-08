const search = function (array, key) {
  for (let i = 0, length = array.length; i < length; i++) {
    if (key === array[i]) {
      return i
    }
  }
  return -1
}

module.exports = search
