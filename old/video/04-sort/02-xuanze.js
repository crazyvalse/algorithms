/*
选择排序
1. for循环找起始点
2. 找出最小的，并mark
 */

function foo(arrays) {
  let minIndex
  for (let i = 0; i < arrays.length - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < arrays.length; j++) {
      if (arrays[minIndex] > arrays[j]) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      arrays[i] = arrays[i] ^ arrays[minIndex]
      arrays[minIndex] = arrays[i] ^ arrays[minIndex]
      arrays[i] = arrays[i] ^ arrays[minIndex]
    }
  }
  return arrays
}

console.info(foo([3, 2, 1, 5, 4]))
