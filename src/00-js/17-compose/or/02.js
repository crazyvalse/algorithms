const square = (v) => v * v
const double = (v) => v * 2
const addOne = (v) => v + 1

const res = pipe(square, double, addOne)
console.info(res(3)) // 19;

function pipe() {
  const fns = Array.apply(null, arguments)
  return function (...args) {
    return fns.reduce((result, fn) => {
      return fn.apply(this, Array.isArray(result) ? result : [result])
    }, args)
  }
}
