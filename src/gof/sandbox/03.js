// 沙箱

const window = global

const str0 = `
window.a = 123
console.info(a)
`
const str1 = `
console.info(a)
window.a = 456
console.info(a)
`

/**
 * 1. 同时执行的时候 互不影响；
 *  - 执行字符串代码
 *    - eval
 *    - new Function()
 *  - 不污染 window
 *  -
 */
