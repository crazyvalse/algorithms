test('test lazy', (done) => {
  let foo = function () {
    let t = Date.now()
    foo = function () {
      return t
    }
    return foo()
  }

  const start = foo()

  setTimeout(() => {
    const end = foo()
    expect(end).toBe(start)
    done()
  }, 1000)
})
