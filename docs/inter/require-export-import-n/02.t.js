const vs = require('./02')

console.info(vs.obj) // 1
vs.foo() // 1 2
console.info(vs.obj) // 2
vs.obj.a = 13 //
console.info(vs.obj) // 13
vs.foo() // 13 2
console.info(vs.obj) // 2
