const Heap = require('./01.js')

test('1', () => {
  const heap = new Heap([2, 3, 4, 6, 9, 1, 6])

  expect(heap.sort()).toEqual([1, 2, 3, 4, 6, 6, 9])
})

test('2', () => {
  const heap = new Heap([1])

  expect(heap.sort()).toEqual([1])
})

test('3', () => {
  const heap = new Heap([])

  expect(heap.sort()).toEqual([])
})
