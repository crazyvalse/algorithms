/*
两个数组求交集
 */

const intersection = function (a, b) {
  return a.filter((item) => b.includes(item))
}

const a = [1, 2, 3, 4]
const b = [3, 4, 5]

console.info(intersection(a, b))

/*
并集
 */
const union = function (a, b) {
  return [...a, ...b.filter((item) => !a.includes(item))]
}

console.info(union(a, b))

/*
差集
 */

const diff = function (a, b) {
  return [...a.filter((item) => !b.includes(item)), ...b.filter((item) => !a.includes(item))]
}

console.info(diff(a, b))
