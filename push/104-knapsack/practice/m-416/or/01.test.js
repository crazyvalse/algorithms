const canPartition = require('./01')

test('1', () => {
  expect(canPartition([1, 5, 11, 5])).toEqual(true)
})

test('2', () => {
  expect(canPartition([1, 2, 3, 5])).toEqual(false)
})
