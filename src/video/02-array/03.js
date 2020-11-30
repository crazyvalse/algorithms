/*
假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。

示例 1:

输入: flowerbed = [1,0,0,0,1], n = 1
输出: True
示例 2:

输入: flowerbed = [1,0,0,0,1], n = 2
输出: False

注意:

数组内已种好的花不会违反种植规则。
输入的数组长度范围为 [1, 20000]。
n 是非负整数，且不会超过输入数组的大小。
 */

/**
 * 判断 010 这种情况
 * 极限情况：
 * 01XXX 不行
 * 00XXX 可以
 *
 * if (index === 0 && length > 1 && flowerbed[index + 1] === 0) {
 *   flowerbed[index + 1] = 1
 *   n --
 * }
 *
 * XXX00 可以
 * XXX10 不可以
 *
 * if(index === length - 1 && flowerbed[index -1] === 0) {
 *   flowerbed[index + 1] = 1
 *   n --
 * }
 *
 * while(n > 0) {
 *
 * }
 *
 * 其余情况
 * 010
 *
 * if(flowerbed[index -1] === 0 && flowerbed[index + 1] === 0) {
 *   flowerbed[index + 1] = 1
 *   n --
 *   index ++
 * }
 *
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// var canPlaceFlowers = function (flowerbed, n) {
//   for (let index = 0, len = flowerbed.length; index < len && n > 0; index++) {
//     if (flowerbed[index] === 0) {
//       if (index === 0) {
//         if (len === 1 || (len > 1 && flowerbed[index + 1] === 0)) {
//           flowerbed[index] = 1
//           index++
//           n--
//         }
//       } else if (index === len - 1 && flowerbed[index - 1] === 0) {
//         flowerbed[index + 1] = 1
//         n--
//       } else {
//         if (flowerbed[index - 1] === 0 && flowerbed[index + 1] === 0) {
//           flowerbed[index] = 1
//           index++
//           n--
//         }
//       }
//     }
//   }
//   return n <= 0
// }

/**
 * 前后补0 从1开始
 * @param flowerbed
 * @param n
 * @returns {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  flowerbed.push(0)
  flowerbed.unshift(0)
  for (let i = 1; i < flowerbed.length - 1 && n > 0; i++) {
    if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      i++
      n--
    }
  }
  return n <= 0
}

console.info(1, canPlaceFlowers([1, 0, 0, 0, 1], 1))
console.info(2, canPlaceFlowers([1, 0, 0, 0, 1], 2))
console.info(3, canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2))
console.info(4, canPlaceFlowers([0, 1, 0, 0, 0, 1], 2))
console.info(5, canPlaceFlowers([0, 0, 1, 0, 0, 0, 1], 2))
console.info(6, canPlaceFlowers([0], 1))
