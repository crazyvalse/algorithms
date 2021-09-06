// function F() {}
// F.prototype.arr = [1]
// F.prototype.b = 1
// F.prototype.c = 'english'
//
// let obj1 = new F()
// obj1.arr.push(2)
// obj1.b = 2
// obj1.c = 'c'
//
// let obj2 = new F()
//
// console.info(obj1.b)
// console.log(obj2.arr, obj2.b, obj2.c)

setTimeout(function () {
  console.log(1)
}, 0)

new Promise(function (resolve) {
  console.log(2)
  for (var i = 0; i < 10000; i++) {
    i == 9999 && resolve()
  }
  console.log(3)
}).then(function () {
  console.log(4)
})
console.log(5)

// 2 3 5 4 1
