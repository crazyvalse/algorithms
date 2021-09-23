// 第一版
// function debounce(cb, time) {
//   var timer
//   return function () {
//     clearTimeout(timer)
//     timer = setTimeout(cb, time)
//   }
// }

// 第二版：优化this的指向

// 第三版：添加参数

// 第四版：返回值
// function debounce(func, wait) {
//   let timeout, result
//
//   return function () {
//     const context = this
//     const args = arguments
//
//     clearTimeout(timeout)
//     timeout = setTimeout(function () {
//       result = func.apply(context, args)
//     }, wait)
//     return result
//   }
// }

// 第五版：立即执行
// 我不希望非要等到事件停止触发后才执行，我希望立刻执行函数，然后等到停止触发n秒后，才可以重新触发执行。

// function debounce(func, wait, immediate) {
//   let timeout, result
//
//   return function () {
//     const context = this
//     const args = arguments
//
//     if (timeout) {
//       clearTimeout(timeout)
//     }
//
//     if (immediate) {
//       const callNow = !timeout
//       timeout = setTimeout(() => {
//         timeout = null
//       }, wait)
//       if (callNow) {
//         result = func.apply(context, args)
//       }
//     } else {
//       timeout = setTimeout(function () {
//         result = func.apply(context, args)
//       }, wait)
//     }
//
//     return result
//   }
// }

// 第六版：取消

function debounce(fn, time, immediate) {
  let timer
  function debounced() {
    const context = this
    const args = arguments

    if (immediate && !timer) {
      cb.apply(this, args)
    }

    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn.apply(context, args)
    }, time)
  }

  debounced.cancel = function () {
    clearTimeout(timer)
  }
  return debounced
}

module.exports = debounce
