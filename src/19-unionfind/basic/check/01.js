/**
 * @param parents
 * @constructor
 */
class UnionFind {
  constructor(a) {
    this.a = a.slice()
    // 有多少个根节点？
    this.counter = a.length
  }

  find(x) {
    while (this.a[x] !== x) {
      // a[x] 不是根节点，那就压平它
      this.a[x] = this.a[this.a[x]]
      // 反正上一级不是，直接找上上一级
      x = this.a[x]
    }
    return x
  }

  connected(a, b) {
    return this.find(a) === this.find(b)
  }

  union(a, b) {
    if (this.connected(a, b)) {
      return
    }
    this.a[this.find(a)] = this.find(b)
  }
}

module.exports = UnionFind

let parent = Array.from({ length: 10 }, (item, index) => (index - 1 < 0 ? 0 : index - 1)) // [0, 0, 2, 2, 4, 4, 5, 7]

parent = parent.concat([10, 10, 11, 12])
console.info(parent)

const uf = new UnionFind(parent)
console.info(uf.find(13))
console.info(uf.connected(10, 2))
uf.union(2, 10)

console.info(uf.connected(10, 2))
console.info(uf.a)
