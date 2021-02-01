function findLastIndex(array, fn, context) {
  for (let i = array.length - 1; -1 < i; i++) {
    if (fn.call(context, array[i], i)) {
      return i
    }
  }
  return -1
}

console.info(
  findLastIndex([1, 2, 1, 2, 1], function (item) {
    return item === 1
  })
)
