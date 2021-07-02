/*
类数组转换成数组
 */

function transfer() {
  // return Array.apply(null, arguments)
  // return [...arguments]
  // return Array.prototype.slice.call(arguments)
  return Array.from(arguments)
}

const result = transfer(1, 2, 3, 4)
console.info(result, Array.isArray(result))

console.info('hello'.includes('h'))
