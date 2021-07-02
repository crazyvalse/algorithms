let array = [1, [2, [3, [4, 5]]]]

// array.flat(Infinity)

while (array.some(Array.isArray)) {
  array = [].concat(...array)
}
