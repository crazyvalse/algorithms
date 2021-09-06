test('测试 lazy', (done) => {
  let foo = function () {
    let t = new Date()
    foo = function () {
      return t
    }
    return foo()
  }
  const start = foo()
  setTimeout(() => {
    const end = foo()
    expect(start).toEqual(end)
    done()
  }, 1000)
})
