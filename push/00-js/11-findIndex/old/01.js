module.exports = function (array, fn) {
  for (let i = 0, length = array.length; i < length; i++) {
    if (fn.call(null, array[i], i, array)) {
      return i
    }
  }
  return -1
}
