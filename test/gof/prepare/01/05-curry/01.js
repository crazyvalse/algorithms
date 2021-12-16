/*
curry 的这种用途可以理解为：参数复用。本质上是降低通用性，提高适用性。

var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = curry(abc);

curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]
 */

function partial(fn) {
  const args = Array.prototype.slice.call(arguments, 1)
  return function () {
    const newArgs = args.concat([...arguments])
    return fn.apply(this, newArgs)
  }
}
//
// function add(a, b, c) {
//   return a + b + c
// }
//
// console.info(partial(partial(add, 1), 2)(3))

/*
假设这个函数需要3个参数

- 那么如果总的参数个数 >= 3 那么返回计算结果 fn.apply(this, combinedArgs)
- 如果小于的话 返回一个function，
  - 这个函数是个偏函数需要缓存 args
  - 这个 function 仍具备柯里化 return curry
  - 同时还得知道剩余多少length

闭包里需要什么？
- 总的函数参数长度
- 每次填完数据之后，需要知道剩余多少
 */

// var foo = function (a, b, c) {
//   return [a, b, c]
// }
//
// var curriedFoo = curry(foo)
// console.info(curriedFoo(1, 2, 3)) // [1, 2, 3]

function curry(fn, length) {
  length = length || fn.length
  return function () {
    // 当函数总长度 < 传入的总长度
    if (length <= arguments.length) {
      return fn.apply(this, arguments)
    }
    return curry(partial.apply(this, [fn, ...arguments]), length - arguments.length)
  }
}

var abc = function (a, b, c) {
  return [a, b, c]
}

var curried = curry(abc)

console.info(curried(1)(2)(3))
// => [1, 2, 3]

console.info(curried(1, 2)(3))
// => [1, 2, 3]

console.info(curried(1, 2, 3))
// => [1, 2, 3]

// 传入一个n 计算叠加的和
// function foo(n) {
//   let result = 0
//   for (let i = n; i >= 0; i--) {
//     result += i
//   }
//   return result
// }
//
// console.info(foo(10))

// function bar(n) {
//   if (n === 0) {
//     return 0
//   }
//   return n + bar(n - 1)
// }

// function bar(n) {
//   let result = 0
//   const traverse = function (i) {
//     if (i <= 0) {
//       return
//     }
//     result += i
//     traverse(i - 1)
//   }
//   traverse(n)
//   return result
// }
