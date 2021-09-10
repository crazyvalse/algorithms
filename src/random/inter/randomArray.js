/*
怎么在制定数据源里面生成一个长度为 n 的不重复随机数组
能有几种方法 时间复杂度多少
 */

function getRandomArray(array, n) {
  const a = array.slice()
  for (let i = a.length; i > a.length - n; i--) {
    const ti = Math.floor(Math.random() * i)
    ;[a[ti], a[i - 1]] = [a[i - 1], a[ti]]
  }
  return a.slice(a.length - n, a.length)
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const resArr = getRandomArray(testArray, 12)
console.info(resArr)
