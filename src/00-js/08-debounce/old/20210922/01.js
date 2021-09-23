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
    // 再次调用的时候，清空 timer，重新定时
    if (timer) {
      clearTimeout(timer)
    }

    // 是否是需要立刻执行！timer 为 null，说明是第一次
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
