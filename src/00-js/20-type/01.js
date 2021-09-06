/*
1. 如何准确地判断一个数据的类型呢?
2. 为什么要用 call 呢？
 */
const value = [1, 2, 3]

console.info(Object.prototype.toString.call(value))
console.info(typeof value)
console.info()
