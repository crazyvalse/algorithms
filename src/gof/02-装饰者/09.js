class Plane {
  @bomb
  @missile
  fire() {
    console.info('发射机关枪，哒哒哒')
  }
}

const p = new Plane()

p.fire()

function missile(target, name, decriptor) {
  const oldValue = decriptor.value

  decriptor.value = function (...args) {
    console.info('发射导弹，砰砰砰')
    return oldValue.apply(this, args)
  }
}

function bomb(target, name, decriptor) {
  const oldValue = decriptor.value

  decriptor.value = function (...args) {
    console.info('投掷炸弹，Duang Duang Duang！')
    return oldValue.apply(this, args)
  }
}
