function fn(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num)
    }, 1000)
  })
}

function* gen() {
  yield fn(1)
  yield fn(2)
  return 3
}

const g = gen()

const n1 = g.next().value

n1.then((data) => {
  console.info(data)
  const n2 = g.next().value
  n2.then((data) => {
    console.info(data)
  })
})
