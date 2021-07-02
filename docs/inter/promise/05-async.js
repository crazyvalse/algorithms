function getNum(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num + 1)
    }, 1000)
  })
}

function asyncFn(creator) {
  const iterator = creator()

  function next(data) {
    const result = iterator.next(data)
    if (result.done) return result.value

    // value 是个promise
    result.value.then(function (data) {
      next(data)
    })
  }
  next()
}

asyncFn(function* () {
  const f1 = yield getNum(1)
  const f2 = yield getNum(f1)
  console.info(f2)
})
