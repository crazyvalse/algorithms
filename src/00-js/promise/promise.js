;(function (window) {
  function Promise(executor) {
    this.status = 'pending'
    this.data = undefined
    this.callbacks = []

    function resolve(value) {
      if (this.status !== 'pending') {
        return
      }

      this.status = 'resolved'
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
      } else if (this.status === 'resolved') {
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

  window.Promise = Promise
})(global)
