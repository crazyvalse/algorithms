module.exports = function (array, fn) {
  for (let i = 0; i < array.length; i++) {
    if (fn.call(null, array[i], i, array)) {
      return i
    }
  }
  return -1
}
