/*
两个相邻的数跨度最大
 */
// function foo(array) {
//   if (array.length < 2) {
//     return 0
//   }
//   let max = 0
//   array.sort((a, b) => a - b)
//   for (let i = 0; i < array.length - 1; i++) {
//     if (max < array[i + 1] - array[i]) {
//       max = array[i + 1] - array[i]
//     }
//   }
//   return max
// }

function foo(array) {
  if (array.length < 2) {
    return 0
  }
  let max = 0
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        array[j] = array[j] ^ array[j + 1]
        array[j + 1] = array[j] ^ array[j + 1]
        array[j] = array[j] ^ array[j + 1]
      }
    }
    if (i < array.length - 1 && array[i + 1] - array[i] > max) {
      max = array[i + 1] - array[i]
    }
  }
  return Math.max(max, arr[1] - arr[0])
}

console.info(foo([2, 8, 4, 19, 12]))
