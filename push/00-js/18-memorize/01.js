// 函数记忆是指将上次的计算结果缓存起来，当下次调用时，如果遇到相同的参数，就直接返回缓存中的数据。
// 原理上只用把参数和对应的结果数据存到一个对象中，调用时，判断参数对应的数据是否存在，存在就返回对应的结果数据。
function memorize(f) {
  const cache = {}
  return function () {
    const key = arguments.length + Array.prototype.join.call(arguments, ',')
    if (key in cache) {
      return cache[key]
    } else {
      return (cache[key] = f.apply(this, arguments))
    }
  }
}

const add = function (a, b, c) {
  return a + b + c
}
const memorizedAdd = memorize(add)

const start0 = Date.now()
for (let i = 0; i < 100000; i++) {
  memorizedAdd(1, 2, 3)
}

console.info(Date.now() - start0)

const start1 = Date.now()
for (let i = 0; i < 100000; i++) {
  add(1, 2, 3)
}
console.info(Date.now() - start1)
