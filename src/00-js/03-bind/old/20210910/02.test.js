// require('./02.js')
//
// test('测试 bind - 2: 传参', () => {
//   var foo = {
//     value: 1
//   }
//
//   function Bar(name, age) {
//     return {
//       value: this.value,
//       name,
//       age
//     }
//   }
//
//   const bar = Bar.myBind(foo, 'daisy')
//   expect(bar(18)).toEqual({ age: 18, name: 'daisy', value: 1 })
//   // expect(bar.bind(foo, 'daisy')(18)).toEqual({ age: 18, name: 'daisy', value: 1 })
// })
//
// test('测试 bind - 3: 传参', () => {
//   var foo = {
//     value: 1
//   }
//
//   function Bar(name, age) {
//     this.habit = 'shopping'
//     this.name = name
//   }
//
//   Bar.prototype.friend = 'kevin'
//
//   var bindFoo = Bar.myBind(foo, 'daisy')
//
//   var obj = new bindFoo(18)
//
//   console.info(foo)
//
//   expect(obj.habit).toEqual('shopping')
//   expect(obj.friend).toEqual('kevin')
// })

const o = {
  a: 1
}

function foo() {
  this.b = 2
  this.c = 3
  return this
}

const f = foo.bind(o)
