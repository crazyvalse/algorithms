function add(a, b) {
  return a + b
}

function partial(fn, ...args) {
  return function (...newArgs) {
    return fn.apply(this, args.concat(newArgs))
  }
}

// const go = curry(add)
//
// console.info(go(1)(2)(3))
// console.info(go(1, 2)(3))
// console.info(go(1, 2, 3))

// function curry(fn, length) {
//   length = length || fn.length
//
//   return function (...args) {
//     if (args.length >= length) {
//       return fn.apply(this, args)
//     }
//
//     return curry(partial.apply(this, [fn, ...args]), length - args.length)
//   }
// }
