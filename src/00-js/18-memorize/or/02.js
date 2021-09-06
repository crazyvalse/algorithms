// 第二版 (来自 underscore 的实现)
const memorize = function (func, hasher) {
  const memoize = function (key) {
    const cache = memoize.cache
    const address = '' + (hasher ? hasher.apply(this, arguments) : key)
    if (!cache[address]) {
      cache[address] = func.apply(this, arguments)
    }
    return cache[address]
  }
  memoize.cache = {}
  return memoize
}

const add = function (a, b, c) {
  return a + b + c
}

const memoizedAdd = memorize(add, function () {
  const args = Array.prototype.slice.call(arguments)
  return JSON.stringify(args)
})

console.log(memoizedAdd(1, 2, 3)) // 6 123
console.log(memoizedAdd(1, 2, 4)) // 7 456
