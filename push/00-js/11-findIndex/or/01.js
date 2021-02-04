module.exports = function findIndex(array, fn, context) {
  for (let i = 0; i < array.length; i++) {
    if (fn.call(context, array[i], i, array)) {
      return i
    }
  }
  return -1
}
