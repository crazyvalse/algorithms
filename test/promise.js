function getAuth() {
  return Promise.resolve('getAuthInfo')
    .then(() => {
      console.info(3)
      return new Promise((resolve) => {
        setTimeout(() => {
          Promise.resolve('getAuth').then(() => {
            console.info(4)
            resolve()
          })
        }, 1000)
      })
    })
    .then(() => {
      console.info(6)
    })
}

module.exports = getAuth
