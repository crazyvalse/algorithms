/**
 * 1. 返回一个fn
 * 2. 每次调用这个fn，都会自动延后调用时间
 * 思路，每次调用的时候，清空time，重新设置time
 * @param cb
 * @param span
 */

module.exports = debounce

function debounce(cb, span, immediate) {
  let timer = null
  function debounced() {
    if (timer) {
      clearTimeout(timer)
    }

    if (immediate && !timer) {
      cb.apply(this, Array.prototype.slice.call(arguments))
    }

    timer = setTimeout(() => {
      cb.apply(this, Array.prototype.slice.call(arguments))
    }, span)
  }

  debounced.cancel = function () {
    clearTimeout(timer)
  }
  return debounced
}
