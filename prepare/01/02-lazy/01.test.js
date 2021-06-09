const { getWS } = require('./01')

test('1', (done) => {
  const a = getWS()
  setTimeout(() => {
    const b = getWS()
    expect(a).toEqual(b)
    done()
  }, 1000)
})
