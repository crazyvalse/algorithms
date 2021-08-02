function foo() {
  console.log(this.a)
}
var a = 1
foo() // 1

const obj = {
  a: 2,
  foo: foo
}
obj.foo() //2

const c = new foo()
// c.foo() // undefined
