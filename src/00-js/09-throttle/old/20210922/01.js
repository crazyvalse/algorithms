/**
 * 1. 返回一个function
 * 2. 开始的时候执行一次，之后就不再执行了
 * 思路：
 * 1. 执行 fn.apply(this, arguments)
 * 2. 判断 now - start > time
 * @param fn
 * @param time
 * @returns {Function}
 */
// function throttle(fn, time) {
//   let start = 0
//   return function () {
//     let now = Date.now()
//     if (now - start >= time) {
//       fn.apply(this, arguments)
//       start = now
//     }
//   }
// }
/**
 * 最后一次执行
 * 1. 返回一个function
 * 2. 每次访问的时候，判断是否在时间内
 * @param fn
 * @param time
 * @returns {function(): *}
 */
function throttle(fn, time) {
  let timer = null
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fn.apply(this, arguments)
      }, time)
    }
  }
}
//
function cb(name) {
  console.info(name)
}

const go = throttle(cb, 1000)

go(1)

setTimeout(() => {
  go(2)
}, 500)
setTimeout(() => {
  go(3)
}, 700)
setTimeout(() => {
  go(3)
}, 2000)

module.exports = throttle
