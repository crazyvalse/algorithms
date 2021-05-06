const minDistance = require('./01')

test('1', () => {
  expect(minDistance('horse', 'ros')).toEqual(3)
})

test('2', () => {
  expect(minDistance('intention', 'execution')).toEqual(5)
})
