// function makeCounter() {
//   let counter = { a: 1 }
//
//   return function () {
//     return counter.a++
//   }
// }
//
// const c = makeCounter()
// console.info(c())
// console.info(c())
//
// const c1 = makeCounter()
// console.info(c1())

// function makeWorker() {
//   let name = 'Pete'
//
//   return function () {
//     console.info(name)
//   }
// }
//
// let name = 'John'
//
// // create a function
// let work = makeWorker()
//
// // call it
// work() // 会显示什么？

// let phrase = 'Hello'
//
// {
//   let user = 'John'
//
//   function sayHi() {
//     console.info(`${phrase}, ${user}`)
//   }
// }
//
// sayHi()

{
  function a() {
    console.info('hello')
  }

  a = 50
}

console.info(a)
