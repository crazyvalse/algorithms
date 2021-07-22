function Plane() {}

Plane.prototype.fire = function () {
  console.info('开枪，哒哒哒')
}

const p = new Plane()
p.fire()

console.info('--------------')

/*
1. 仍然保留现在所有的功能
2. 发射导弹
 */
function upgrade(target, callback) {
  // 1. 缓存老方法
  const oldFn = Plane.prototype[target]
  // 2. 重新改写老方法
  Plane.prototype[target] = function (...args) {
    // 3. 添加新的功能
    callback()
    // 4. 调用老功能，并返回值
    return oldFn.apply(this, args)
  }
}

for (let name in Plane.prototype) {
  upgrade(name, function () {
    // ...
  })
}

upgrade('fire', () => {
  console.info('发射导弹，咚咚咚')
})

p.fire()
// 发射导弹
// 开枪，哒哒哒

/*
期待 投掷炸弹
 */
console.info('----------')

upgrade('fire', () => {
  console.info('投掷炸弹，DuangDuangDuang')
})

p.fire()
