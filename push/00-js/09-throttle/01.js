// 1. 开始执行一次，之后不执行知道 wait 时间后
// function throttle(fn, time) {
//   let previous = 0
//   let context, args
//   return function () {
//     const now = Date.now()
//     context = this
//     args = arguments
//     if (now - previous > time) {
//       fn.apply(context, args)
//       previous = now
//     }
//   }
// }

// 2. 不执行，直到 wait 时间后执行

function throttle(fn, time) {
  let context, args, timeout
  return function () {
    context = this
    args = arguments
    if (!timeout) {
      timeout = setTimeout(() => {
        clearTimeout(timeout)
        fn.apply(context, args)
      }, time)
    }
  }
}

function cb(name) {
  console.info(name)
}

const go = throttle(cb, 1000)

go(1)

setTimeout(() => {
  go(2)
}, 500)
setTimeout(() => {
  go(3)
}, 1000)
