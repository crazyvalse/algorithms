/**
 * 1. 返回一个fn
 * 2. 每次调用这个fn，都会自动延后调用时间
 * 思路，每次调用的时候，清空time，重新设置time
 * @param cb
 * @param span
 */

module.exports = function debounce(cb, span, immediate) {
  let timeout

  function debounced() {
    if (timeout) {
      clearTimeout(timeout)
    }

    if (immediate && !timeout) {
      cb.apply(this, arguments)
    }

    timeout = setTimeout(() => {
      cb.apply(this, arguments)
    }, span)
  }

  debounced.cancel = function () {
    clearTimeout(timeout)
  }

  return debounced
}
