/**
 * 每隔 time 执行，间隔内的方法不能执行
 * 方法一：使用 setTimeout
 *  - 判断是否有timer
 *    - 有，无作为
 *    - 没有：声明新的timer，执行，取消
 *
 * @param fn
 * @param time
 * @returns {function(): *}
 */
function throttle(fn, time) {
  let start = 0
  return function () {
    const now = Date.now()
    if (now - start >= time) {
      fn.apply(this, arguments)
      start = now
    }
  }
}

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
