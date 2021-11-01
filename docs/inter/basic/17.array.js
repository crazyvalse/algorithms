let arr = [13, 6, 10, 11, 16]
const max = Math.max.apply(null, arr)
const min = Math.min.apply(null, arr)

console.log(max) // 16
console.log(min) // 6
