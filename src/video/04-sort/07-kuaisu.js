function foo(array) {
  let len = array.length
  if (len < 2) {
    return array
  }
  let flag = array[0]
  let left = []
  let right = []

  for (let i = 1, tem; i < len; i++) {
    tem = array[i]
    if (tem < flag) {
      left.push(tem)
    } else {
      right.push(tem)
    }
  }
  return foo(left).concat(flag, foo(right))
}

console.info(foo([2, 1, 4, 3, 5, 7, 6]))


let a = 'a'
let b = 'b'

a = a ^ b
b = a ^ b
a = a ^ b
console.info(a, b)
