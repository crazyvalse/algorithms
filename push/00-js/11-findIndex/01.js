function findIndex(array, fn, context) {
  for (let i = 0; i < array.length; i++) {
    if (fn.call(context, array[i], i, array)) {
      return i
    }
  }
  return -1
}

console.info(
  findIndex([1, 2, 3, 4], function (item, i) {
    return item === 3
  })
)
