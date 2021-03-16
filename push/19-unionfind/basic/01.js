let parent = Array.from({ length: 10 }, (item, index) => (index - 1 < 0 ? 0 : index - 1)) // [0, 0, 2, 2, 4, 4, 5, 7]

parent = parent.concat([10, 10, 11, 12])
// console.info(parents.length)

// function find(x) {
//   // 直到找到一个数据跟下标一直的值，是根节点
//   while (x !== parents[x]) {
//     // 获得数组中的值
//     x = parents[x]
//   }
//   return x
// }
//
// function find(x) {
//   if (x === parent[x]) {
//     return x
//   }
//
//   return (parent[x] = find(parent[x]))
// }
//
// function connected(x, y) {
//   return find(x) === find(y)
// }
//
// // console.info(parents, find(5))
//
// // console.info(connected(5, 9), parents)
//
// function union(x, y) {
//   if (connected(x, y)) {
//     return
//   }
//   parent[find(x)] = find(y)
// }

// console.info(union(8, 12), parents)

function UnionFind(parent) {
  this.parents = parent
}

UnionFind.prototype.find = function (x) {
  if (x === this.parents[x]) {
    return x
  }
  return (this.parents[x] = this.find(this.parents[x]))
}

UnionFind.prototype.connected = function (x, y) {
  return this.find(x) === this.find(y)
}

UnionFind.prototype.union = function (x, y) {
  if (this.connected(x, y)) {
    return
  }
  // x的根节点 = y的根节点
  parent[this.find(x)] = this.find(y)
}

const uf = new UnionFind(parent)

console.info(uf.parents, uf.union(8, 12))
