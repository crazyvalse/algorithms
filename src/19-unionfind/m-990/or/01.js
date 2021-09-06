/*
990. 等式方程的可满足性
给定一个由表示变量之间关系的字符串方程组成的数组，每个字符串方程 equations[i] 的长度为 4，
并采用两种不同的形式之一："a==b" 或 "a!=b"。在这里，a 和 b 是小写字母（不一定不同），表示单字母变量名。

只有当可以将整数分配给变量名，以便满足所有给定的方程时才返回 true，否则返回 false。

示例 1：

输入：["a==b","b!=a"]
输出：false
解释：如果我们指定，a = 1 且 b = 1，那么可以满足第一个方程，但无法满足第二个方程。没有办法分配变量同时满足这两个方程。
示例 2：

输入：["b==a","a==b"]
输出：true
解释：我们可以指定 a = 1 且 b = 1 以满足满足这两个方程。
示例 3：

输入：["a==b","b==c","a==c"]
输出：true
示例 4：

输入：["a==b","b!=c","c==a"]
输出：false
示例 5：

输入：["c==c","b==d","x!=z"]
输出：true


提示：

1 <= equations.length <= 500
equations[i].length == 4
equations[i][0] 和 equations[i][3] 是小写字母
equations[i][1] 要么是 '='，要么是 '!'
equations[i][2] 是 '='
 */
/**
 * 1. 先union
 * 2. 再判断
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  equations.sort((a, b) => {
    if (a[1] === '!' && b[1] === '=') {
      return 1
    } else if (a[1] === '=' && b[1] === '!') {
      return -1
    } else {
      return 0
    }
  })
  let counter = 0
  const walkman = equations.reduce((pre, cur) => {
    const a = cur[0]
    const b = cur[3]
    if (pre[a] === undefined) {
      pre[a] = counter++
    }
    if (pre[b] === undefined) {
      pre[b] = counter++
    }
    return pre
  }, {})
  const uf = new UnionFind(counter)
  for (let i = 0; i < equations.length; i++) {
    const a = walkman[equations[i][0]]
    const b = walkman[equations[i][3]]
    const isTrue = equations[i][1] === '='
    if (isTrue) {
      uf.union(a, b)
      continue
    }
    if (uf.isConnected(a, b)) {
      return false
    }
  }
  return true
}

class UnionFind {
  constructor(n) {
    this.parents = Array.from({ length: n }, (a, i) => i)
  }

  find(x) {
    if (x === this.parents[x]) {
      return x
    }
    return (this.parents[x] = this.find(this.parents[x]))
  }

  isConnected(x, y) {
    return this.find(x) === this.find(y)
  }

  union(x, y) {
    const rootX = this.find(x)
    const rootY = this.find(y)
    if (rootX === rootY) {
      return
    }
    this.parents[rootY] = rootX
  }
}

module.exports = equationsPossible
