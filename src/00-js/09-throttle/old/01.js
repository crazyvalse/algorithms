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
//     let result
//     if (Date.now() - start >= time) {
//       result = fn.apply(this, arguments)
//       start = Date.now()
//     }
//     return result
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
// function throttle(fn, time) {
//   let timeout = null
//   return function () {
//     if (!timeout) {
//       timeout = setTimeout(() => {
//         clearTimeout(timeout)
//         fn.apply(this, arguments)
//       }, time)
//     }
//   }
// }

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

function throttle(func, wait, options) {
  var timeout, context, args, result
  var previous = 0
  if (!options) options = {}

  var later = function () {
    previous = options.leading === false ? 0 : new Date().getTime()
    timeout = null
    func.apply(context, args)
    if (!timeout) context = args = null
  }

  return function () {
    var now = new Date().getTime()
    if (!previous && options.leading === false) previous = now
    var remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
  }
}
