setTimeout(function () {
  console.log('1')
}, 0)
async function async1() {
  console.log('2')
  const data = await async2()
  console.log('3')
  return data
}
async function async2() {
  return new Promise((resolve) => {
    console.log('4')
    resolve('async2的结果')
  }).then((data) => {
    console.log('5')
    return data
  })
}
async1().then((data) => {
  console.log('6')
  console.log(data)
})
new Promise(function (resolve) {
  console.log('7')
  //   resolve()
}).then(function () {
  console.log('8')
})

// 同步 2 7
// 微 4 5 3 6 async2
// st 1

// -------
// 同步 2 4 7
// 微 5 3 6 async2
// st 1
