class Plane {
  fire() {
    console.info('发射机关枪，哒哒哒')
  }
}

const p = new Plane()

p.fire()

console.info('-----------------')

function upgrade(callback) {
  const proto = Plane.prototype
  const oldFire = proto.fire
  proto.fire = function (...args) {
    callback()
    oldFire.apply(this, args)
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
