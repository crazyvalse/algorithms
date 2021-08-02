console.info('123' == 123) // false or true? true: 字符串碰到数字的时候转为数字
console.info('' == null) // false or true? // true: 都是false
console.info(undefined == null) // 除非另外一个是 undefined 或者 null 否则都是false
console.info(null == undefined)
console.info('' == 0) // false or true? 会先转为number
console.info([] == 0) // false or true? true
console.info([] == '') // false or true?
console.info([] == ![]) // false or true?
console.info(null == undefined) //  false or true?
console.info(Number(null)) // 返回什么？
console.info(Number('')) // 返回什么？
console.info(parseInt('')) // 返回什么？
console.info({} + 10) // 返回什么？
// let obj = {
//   [Symbol.toPrimitive]() {
//     return 200
//   },
//   valueOf() {
//     return 300
//   },
//   toString() {
//     return 'Hello'
//   }
// }
// console.log(obj + 200) // 这里打印出来是多少？
