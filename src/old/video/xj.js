/**
 * for循环 从1开始取最小的数，拿出来整除 向上取整
 * 算完后相加看看是否 < 8
 * @param piles
 * @param hour
 */
function foo(piles, H) {
  let counter = 1
  let total = 0
  while (total === 0 || total > H) {
    total = piles.reduce((pre, curr) => {
      return pre + Math.ceil(curr / counter)
    }, 0)
    counter++
  }
  return counter - 1
}

// console.info(foo([3, 6, 7, 11], 8))
console.info(foo([30, 11, 23, 4, 20], 5))
console.info(foo([30, 11, 23, 4, 20], 6))
