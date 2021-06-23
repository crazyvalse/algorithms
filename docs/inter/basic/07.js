var a = { n: 1 }
var b = a
a.x = a = { n: 2 }

a.x // --> undefined
b.x // --> {n: 2}

console.info(a)
console.info(b)
console.info(a.x)
console.info(b.x)
