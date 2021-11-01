// var name = 'zac'
//
// function compileCode(src) {
//   src = 'with (sandbox) {' + src + '}'
//   const code = new Function('sandbox', src)
//   return function (sandbox) {
//     const sandboxProxy = new Proxy(sandbox, { has })
//     return code(sandboxProxy)
//   }
// }
// // 相当于检查 获取的变量是否在里面 like: 'in'
// function has(target, key) {
//   return true
// }
// compileCode('log(name)')(console)

const a = {}
const p = new Proxy(a, {
  has() {
    return true
  }
})
