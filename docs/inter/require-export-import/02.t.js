const vs = require('./02')

console.info(vs.obj)
vs.foo()
console.info(vs.obj)
vs.obj.a = 13
console.info(vs.obj)
vs.foo()
console.info(vs.obj)
