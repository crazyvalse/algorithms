const findIndex = require('./01.js')

test('测试 findIndex', () => {
  expect(
    findIndex([1, 2, 3, 4], function (item) {
      return item === 3
    })
  ).toBe(2)
})

Array.prototype.myFindIndex = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn.call(this, this[i], i)) {
      return i
    }
    return -1
  }
}

console.info([1, 2, 3, 4].findIndex((item) => item === 3))
