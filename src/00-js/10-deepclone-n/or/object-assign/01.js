Object.defineProperty(Object, 'assign2', {
  // 1. 这是一个不可枚举的方法，因此需要用 Object.defineProperty
  enumerable: false,
  writable: true,
  configurable: true,
  value: function (target) {
    // 2. 容错
    if (target === null) {
      throw new TypeError('target 没有传值')
    }

    // 3. 包装 target
    const to = Object(target)
    for (let index = 1; index < arguments.length; index++) {
      let nextSource = arguments[index]
      // 排除 null
      if (nextSource !== null) {
        for (let nextKey in nextSource) {
          // 4. 判断是否是可枚举的key
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextSource] = nextSource[nextKey]
          }
        }
      }
    }
    return to
  }
})

var v1 = 'abc'
var v2 = true
var v3 = 10
var v4 = Symbol('foo')
var v5 = null

// 只有可枚举的才行
// var obj = Object.assign2({}, v1, null, v2, undefined, v3, v4)
// console.info(obj)
//
const a = Object.assign2(1, { a: 1 })
