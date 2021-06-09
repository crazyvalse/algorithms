/*
冒泡排序
for循环 a[n] - a[n+1] > 0 调换位置
len --
 */

function foo(arrays) {
  for (let i = arrays.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arrays[j] > arrays[j + 1]) {
        arrays[j] = arrays[j] ^ arrays[j + 1]
        arrays[j + 1] = arrays[j] ^ arrays[j + 1]
        arrays[j] = arrays[j] ^ arrays[j + 1]
      }
    }
  }
  return arrays
}

console.info(foo([3, 2, 1, 5, 4]))
