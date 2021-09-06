test('test lazy', (done) => {
  let foo = function () {
    const now = Date.now()

    foo = function () {
      return now
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
