function go(value, ...args) {
  console.info(value, args)
}

// const a = 123
// const b = 321
// go`s${a}b${b}`

// console.info('hello'.startsWith('h'))

// let [a, b, c] = []
// a = 1
// b = 2
// console.info(a, b)

console.info(isNaN('NaN') === true, Number.isNaN('NaN') === true)

const p = {
  name: 'zac',
  age: 20
}

function goo() {
  console.info(this.name)
  console.info(this.#age)
}

const pg = p::goo
