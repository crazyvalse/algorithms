const debounce = require('./02.js')

test('测试 debounce', (done) => {
  global.counter = 0

  function cb(payload) {
    counter = payload
  }

  const go = debounce(cb, 1000)
  go(1)

  setTimeout(() => {
    go(2)
    expect(counter).toBe(0)
  }, 200)

  setTimeout(() => {
    go(3)
    expect(counter).toBe(0)
  }, 300)

  setTimeout(() => {
    go(4)
    expect(counter).toBe(0)
  }, 400)

  setTimeout(() => {
    expect(counter).toBe(4)
    done()
  }, 1500)
})
