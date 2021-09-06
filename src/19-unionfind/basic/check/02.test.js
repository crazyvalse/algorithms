const UnionFind = require('./02')

let parents = [0, 1, 2, 2, 3]
const uf = new UnionFind(parents)

test('1 find', () => {
  expect(uf.find(4)).toBe(2)
  // expect(uf.parents).toEqual([0, 1, 2, 2, 2])
})

test('2 connected', () => {
  expect(uf.connected(1, 4)).toEqual(false)
})

test('3 union', () => {
  const p = Array.from({ length: 5 }, (i, index) => index)

  const u = new UnionFind(p)
  u.union(4, 2)
  u.union(3, 2)
  expect(u.counter).toBe(3)
})
