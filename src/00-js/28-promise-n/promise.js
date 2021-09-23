// ;(function (window) {
function Promise(executor) {
  this.status = 'pending'
  this.data = undefined
  this.callbacks = []

  function resolve(value) {
    if (this.status !== 'pending') {
      return
    }

    this.status = 'fulfilled'
    this.data = value

    if (this.callbacks.length) {
      setTimeout(() => {
        this.callbacks.forEach((callbackObj) => {
          callbackObj.onResolved(value)
        })
      })
    }
  }

  function reject(reason) {
    if (this.status !== 'pending') {
      return
    }

    this.status = 'rejected'
    this.data = reason

    if (this.callbacks.length) {
      setTimeout(() => {
        this.callbacks.forEach((callbackObj) => {
          callbackObj.onRejected(reason)
        })
      })
    }
  }

  try {
    executor(resolve.bind(this), reject.bind(this))
  } catch (e) {
    reject(e)
  }
}

/**
 * 0. 异常判断
 * 1. 返回 Promise
 * 2. 根据状态执行
 *  a. pending 缓存
 *  b. 异步执行
 */
Promise.prototype.then = function (onResolved, onRejected) {
  onResolved = typeof onResolved === 'function' ? onResolved : (value) => value
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : (reason) => {
          throw reason
        }

  return new Promise((resolve, reject) => {
    // TODO 不应该是this，这里是 const
    const handle = (callback) => {
      // TODO 缺少 try
      try {
        const result = callback(this.data)
        if (result instanceof Promise) {
          result.then(resolve, reject)
        } else {
          resolve(result)
        }
      } catch (e) {
        reject(e)
      }
    }

    if (this.status === 'pending') {
      this.callbacks.push({
        onResolved() {
          handle(onResolved)
        },
        onRejected() {
          handle(onRejected)
        }
      })
    } else if (this.status === 'fulfilled') {
      setTimeout(() => {
        handle(onResolved)
      })
    } else {
      setTimeout(() => {
        handle(onRejected)
      })
    }
  })
}

Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected)
}

Promise.prototype.finally = function (callback) {
  return this.then(
    (res) => {
      return Promise.resolve(callback()).then(() => res)
    },
    (err) => {
      return Promise.reject(callback()).then(() => {
        throw err
      })
    }
  )
}

Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {
      value.then(resolve, reject)
    } else {
      resolve(value)
    }
  })
}

Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason)
  })
}

Promise.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new Error('arg 非数组')
  }

  const length = promises.length
  const values = new Array(length)
  let counter = 0

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((value) => {
        values[index] = value
        counter++

        if (counter === length) {
          resolve(values)
        }
      }, reject)
    })
  })
}

Promise.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new Error('arg 非数组')
  }
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject)
    })
  })
}

// 测试
Promise.defer = Promise.deferred = function () {
  let dfd = {}
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve
    dfd.reject = reject
  })
  return dfd
}
module.exports = Promise

// window.Promise = Promise
// })(global)

// new Promise((resolve, reject) => {
//   resolve(1)
//   // reject(1)
// })
//   .then(
//     (value) => {
//       console.info('t1', value)
//       throw 5
//     },
//     (reason) => {
//       console.info('t1-r', reason)
//     }
//   )
//   .then(
//     (value) => {
//       console.info('t2', value)
//     },
//     (reason) => {
//       console.info('t2-r', reason)
//     }
//   )
//   .catch((err) => {
//     console.info(err)
//   })
