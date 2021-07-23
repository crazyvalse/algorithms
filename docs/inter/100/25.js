const obj = { a: 'one', b: 'two', a: 'three' }
console.log(obj)

String.prototype.build = function () {
  return this.split('').reverse().join('')
}

const s = 'hello'

console.info(s.build())
