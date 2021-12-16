function retry(fn, times, interval) {
  return function inner(...args) {
    const vm = this
    return new Promise((resolve, reject) => {
      fn.apply(vm, args)
        .then((data) => {
          resolve(data)
        })
        .catch((e) => {
          if (!times) {
            reject(e)
          } else {
            setTimeout(() => {
              times--
              resolve(inner.apply(vm, args))
            }, interval)
          }
        })
    })
  }
}

let counter = 3

function request(url) {
  return new Promise((resolve, reject) => {
    counter--
    if (!counter) {
      console.info(1, url)
      resolve(3)
    } else {
      console.info(2, url)
      reject(4)
    }
  })
}

const ensure = retry(request, 2, 5000)

ensure('http://www.baidu.com')
  .then((data) => {
    console.info(data)
  })
  .catch((e) => {
    console.info(e)
  })
