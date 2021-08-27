let arr = [1, 2, 3, 4, 5, 6, 7]

console.info(arr.filter(inBetween(3, 6))) // 3,4,5,6

console.info(arr.filter(inArray([1, 2, 10]))) // 1,2

function inBetween(l, r) {
  return function (item) {
    return l <= item && item <= r
  }
}

function inArray(a) {
  return function (item) {
    return a.includes(item)
  }
}
