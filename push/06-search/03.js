/*
有序数组中 绝对值最小的数
极限情况
[-2,-1]
[1,2,3]

其他的二分法，找到接近于0的
 */

function search(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      return i
    } else if (array[i] > 0) {
      if (i === 0) {
        return array[i]
      }
      return Math.abs(array[i]) > Math.abs(array[i - 1]) ? i - 1 : i
    }
  }
}

console.info(search([1, 2, 3, 4, 5]))
console.info(search([-3, -2, -1, 1, 2, 3, 4, 5]))
console.info(search([-3, -2, -1, 0, 1, 2, 3, 4, 5]))
console.info(search([-3, -2, -1, 2, 3, 4, 5]))
