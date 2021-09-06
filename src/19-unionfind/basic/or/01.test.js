const UnionFind = require('./01')

test('1', () => {
  let parent = Array.from({ length: 10 }, (item, index) => (index - 1 < 0 ? 0 : index - 1)) // [0, 0, 2, 2, 4, 4, 5, 7]
  parent = parent.concat([10, 10, 11, 12])
  const uf = new UnionFind(parent)
  uf.union(8, 12)
  expect(uf.parents).toEqual([10, 0, 0, 0, 0, 0, 0, 0, 0, 8, 10, 10, 10, 12])
})
