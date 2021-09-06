module.exports = memorize

/**
 * 把 cache 放到里面中
 * @param fn
 */

function memorize(fn) {
  function memorized() {
    const key = JSON.stringify(Array.prototype.slice.call(arguments))
    if (memorized.cache[key]) {
      return memorized.cache[key]
    }
    return (memorized.cache[key] = fn.apply(this, arguments))
  }

  memorized.cache = {}
  return memorized
}
