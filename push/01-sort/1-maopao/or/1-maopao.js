/*
冒泡排序
1. 相邻的两个元素比较大小，如果 array[i]< array[i+1] swap，否则进行下一个
2. 最后一位是最大的
3. 每次循环排除最后一个
两层遍历：
1. 从0开始选数，并且length 不断-1
 */
// module.exports = function (array) {
//   // 交换位置
//   const swap = (array, a, b) => {
//     array[a] = array[a] ^ array[b]
//     array[b] = array[a] ^ array[b]
//     array[a] = array[a] ^ array[b]
//     return array
//   }
//
//   const sort = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//       for (let j = 0; j < i; j++) {
//         if (array[j] > array[j + 1]) {
//           swap(array, j, j + 1)
//         }
//       }
//     }
//     return array
//   }
//
//   console.info(sort(array))
//
//   return sort(array)
// }

module.exports = function (array, isReversed) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return isReversed ? array.reverse() : array
}
