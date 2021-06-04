const obj = {
  a: 1
}

function foo() {
  console.info(obj.a)
  obj.a = 2
  console.info(obj.a)
}

module.exports = {
  obj,
  foo
}
