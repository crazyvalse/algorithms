/*
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is

Object.is() 方法判断两个值是否为同一个值。

Object.is 同值相等算法，在 === 基础上对 0 和 NaN 特别处理

bject.is() 方法判断两个值是否为同一个值。如果满足以下条件则两个值相等:

- 都是 undefined
- 都是 null
- 都是 true 或 false
- 都是相同长度的字符串且相同字符按相同顺序排列
- 都是相同对象（意味着每个对象有同一个引用）
- 都是数字且
  - 都是 +0
  - 都是 -0
  - 都是 NaN
  - 或都是非零而且非 NaN 且为同一个值

与== 运算不同。  == 运算符在判断相等前对两边的变量(如果它们不是同一类型) 进行强制转换 (这种行为的结果会将 "" == false 判断为 true), 而 Object.is不会强制转换两边的值。

与=== 运算也不相同。 === 运算符 (也包括 == 运算符) 将数字 -0 和 +0 视为相等 ，而将Number.NaN 与NaN视为不相等.
 */
const is = function (x, y) {
  // SameValue algorithm
  // 相等后，判断是否为0，如果不为0返回true，为0判断正负
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y
  }
}

console.info(NaN !== NaN)

// console.info(0 === -0)

// console.info(is('123', '123'))
// console.info(is(-0, 0))
// console.info(is(0, 0))
// console.info(is(NaN, Number.NaN))
// console.info(1 / 'a')
// console.info(is('a', 'a'))
// console.info(is('a', 'b'))

// const a = {
//   b: 1
// }
//
// const b = a
// console.info(is(a, b))
