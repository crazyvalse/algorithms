/*
1. 如何判断数据的类型？

参考：
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
- 参考： 红宝书 596 高级函数 - 安全类型检查
 */
// console.info(typeof 1)
// console.info(typeof Infinity)
// console.info(typeof [1, 2, 3, 4])
console.info([1, 2, 3] instanceof Array)
// console.info(typeof null)
// console.info(typeof undefined)
// // console.info(null === undefined)
// console.info(typeof /\w/g) ||
//
// console.info(Array.isArray([1, 2, 3, 4]))
// [object type]
// console.info(Object.prototype.toString.call([1, 2, 3, 4]))
// console.info([1, 2].toString())
// console.info(Object.prototype.toString.call(/\w/g))
// console.info(Object.prototype.toString.call(null))
// console.info(Object.prototype.toString.call(undefined))
function isNull(target) {
  return target === null // undefined
}

// [object type]
console.info(Object.prototype.toString.call(isNull))
