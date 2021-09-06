const Trie = require('./01')

test('1', () => {
  const trie = new Trie()
  trie.insert('apple')
  expect(trie.search('apple')).toEqual(true)
  expect(trie.search('app')).toBeFalsy()
  expect(trie.startsWith('app')).toBeTruthy()
  trie.insert('app')
  expect(trie.search('app')).toBeTruthy() // 返回 True
})
