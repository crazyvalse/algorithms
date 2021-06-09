/*
惰函数
1. 如何获得一个单例
- 例如 浏览器兼容
- 例如 获得一个 vue实例 或者 websocket 实例
 */
function Person(name, age) {
  this.name = name
  this.age = age
}
// 每次都返回同一个实例
// let p = null
// function getSingle() {
//   if (p === null) {
//     p = new Person('zac', 10)
//   }
//   return p
// }

// export default getPerson
// module.exports = getSingle

//
// const a = getSingle()
// const b = getSingle()
// setTimeout(() => {
//   const c = getSingle()
//   console.info(a === b, b === c)
// }, 100)

// const getPerson = (function () {
//   let p = null
//   return function () {
//     if (p === null) {
//       p = new Person('zac', 10)
//     }
//     return p
//   }
// })()

// const a = getPerson()
// const b = getPerson()
// console.info(a, b, a === b)

function getPerson() {
  let p
  if (!p) {
    p = new Person('zac', 10)
    getPerson = function () {
      return p
    }
  }
  return getPerson()
}

const a = getPerson()
const b = getPerson()
console.info(a, b, a === b)
console.info(getPerson.toString())
