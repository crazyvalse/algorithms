// function foo(a) {
//   return a.reduce((pre, cur) => [...pre, ...pre.map((item) => [...item, cur])], [[]])
// }

function foo(a) {
  let result = []
  const walk = function (index, cart) {
    result.push(cart.slice())
    if (index >= a.length) {
      return
    }

    for (let i = index; i < a.length; i++) {
      cart.push(a[i])
      walk(i + 1, cart)
      cart.pop()
    }
  }
  walk(0, [])
  return result
}

console.info(foo([1, 2, 3]))
