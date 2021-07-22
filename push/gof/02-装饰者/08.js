class Foo {
  fib(n) {
    const f = Array(n + 1).fill(0)
    f[0] = 0
    f[1] = 1
    f[2] = 2
    for (let i = 3; i <= n; i++) {
      f[i] = f[i - 1] + f[i - 2]
    }
    return f[n]
  }
}

const a = new Foo()

console.info(a.fib(40))

function upgrade(target, FnName) {
  const proto = target.prototype
  const oldFire = proto[FnName]
  proto[FnName] = function (...args) {
    try {
      return oldFire.apply(this, args)
    } catch (e) {
      console.info(e)
    }
  }
}

upgrade(Foo, 'fib')

console.info(a.fib(-140))
