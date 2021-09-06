const obj = {
  name: 'zac'
}

function plus(a, b) {
  return a + b + this.name
}

const pp = plus.bind(obj, 1)

console.info(pp(2))
