class Plane {
  fire() {
    console.info('发射机关枪，哒哒哒')
  }
}

const p = new Plane()

p.fire()

console.info('-----------------')

function upgrade(before, after) {
  const proto = Plane.prototype
  const oldFire = proto.fire
  proto.fire = function (...args) {
    before && before()
    const result = oldFire.apply(this, args)
    after && after()
    return result
  }
}

upgrade(() => {
  console.info('发射导弹，砰砰砰')
})
p.fire()

console.info('-----------------')

upgrade(() => {
  console.info('投放炸弹，DuangDuangDuang')
})

p.fire()

console.info('-----------------')

upgrade(null, () => {
  console.info('放完就跑')
})

p.fire()
