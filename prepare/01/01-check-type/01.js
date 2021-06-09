console.info(typeof 3)
console.info(typeof Number.MIN_VALUE)
console.info(typeof Infinity)
console.info(typeof -Infinity)
console.info(typeof NaN)

console.info(typeof /\w/g)
console.info(typeof null)
console.info(typeof undefined)

console.info(
  typeof (function () {
    return arguments
  })()
)

console.info(
  Object.prototype.toString.call(
    (function () {
      return arguments
    })()
  )
)
