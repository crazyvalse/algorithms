const envelopes = require('./01')

test('1', () => {
  expect(
    envelopes([
      [5, 4],
      [6, 4],
      [6, 7],
      [2, 3]
    ])
  ).toEqual(3)
})
