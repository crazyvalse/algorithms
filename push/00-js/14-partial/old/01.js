module.exports = partial

function partial(fn) {
  const slice = Array.prototype.slice
  const partArgs = slice.call(arguments, 1)
  return function () {
    return fn.apply(this, partArgs.concat(slice.call(arguments)))
  }
}

function add(a, b) {
  return a + b
}

// var addOne = add.bind(null, 1);
var addOne = partial(add, 1)

var value = 1
var obj = {
  value: 2,
  addOne
}
console.info(obj.addOne(2))
const addOneBind = addOne.bind(obj)
console.info(addOneBind(2))

const addOneBind2 = add.bind(null, 1)
console.info(addOneBind2(2)) // 在浏览器中是 4

console.info(addOne(2))
