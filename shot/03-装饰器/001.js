function Plane() {}

Plane.prototype.fire = function () {
  console.info('开枪，哒哒哒')
}

class NewPlane extends Plane {
  fire() {
    console.info('发射导弹2')
    super.fire()
  }
}

const np = new NewPlane()
np.fire()

//
//
// const p = new Plane()
// p.fire()
//
// console.info('--------------')
//
// /*
// 1. 仍然保留现在所有的功能
// 2. 发射导弹
//  */
// function upgrade(callback) {
//   const oldFn = Plane.prototype.fire
//   Plane.prototype.fire = function (...args) {
//     // 添加新的功能
//     callback()
//     // 调用老功能
//     oldFn.apply(this, args)
//   }
// }
//
// upgrade(() => {
//   console.info('发射导弹，咚咚咚')
// })
//
// p.fire()
// // 发射导弹
// // 开枪，哒哒哒
//
// /*
// 期待 投掷炸弹
//  */
// console.info('----------')
//
// upgrade(() => {
//   console.info('投掷炸弹，DuangDuangDuang')
// })
//
// p.fire()
