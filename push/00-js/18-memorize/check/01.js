module.exports = memorize

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
