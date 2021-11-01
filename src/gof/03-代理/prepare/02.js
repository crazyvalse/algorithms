const code0 = `
window.a = 123
b = 456
console.info(a, b)
`

const code1 = `
console.info(window.a, b)
window.a = 321
b = 654
console.info(a, b)
`

/*
  1. 执行字符串
    - eval(code)
    - new Function()
  问题：eval 啥都能访问，就连 闭包中的都能访问
 */

function Foo() {
  const password = '我的密码'
  this.compile = function (code) {
    return eval(code)
  }
}

const f0 = new Foo()
const f1 = new Foo()

f0.compile('console.info(1, 123)')
f0.compile('console.info(2, password)')
f0.compile('console.info(3, code0)')
