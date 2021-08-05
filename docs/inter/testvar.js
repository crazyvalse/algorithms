// var a
// {
//   a = 50
//   function a() {}
// }
//
// console.info(a)

var a = 10

function f() {
  console.info(a)
  if (false) {
    let a = 2
  }
}

f()
