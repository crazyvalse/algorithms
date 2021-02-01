// var scope = 'global scope'
// function checkscope() {
//   var scope = 'local scope'
//   function f() {
//     return scope
//   }
//   return f()
// }
//
// console.info(checkscope())

var scope = 'global scope'
function checkscope() {
  var scope = 'local scope'
  function f() {
    return scope
  }
  return f
}

// JavaScript函数的执行用到了作用域链，这个作用域链是在函数定义的时候创建的。嵌套的函数f()定义在这个作用域链里，其中的变量scope一定是局部变量，不管何时何地执行函数f()，这种绑定在执行f()时依然有效。
