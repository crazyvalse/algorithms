/*
如何让if(a == 1 && a == 2)条件成立
 */

const a = {
  value: 0,
  valueOf() {
    this.value++
    return this.value
  }
}
const vm = this
let value = 1
Object.defineProperty(vm, 'b', {
  get() {
    return this
  }
})
console.info(vm.b)
console.info(vm.b)
