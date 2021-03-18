function fib(n) {
  if (n < 2) {
    return n
  }
  let pp = 0
  let p = 1
  let r = 0
  for (let i = 2; i <= n; i++) {
    r = pp + p
    pp = p
    p = r
  }
  return r
}
