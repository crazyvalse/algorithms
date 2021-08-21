const exist = require('./01')

test('1', () => {
  expect(
    exist(
      [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
      ],
      'SEEC'
    )
  ).toBeTruthy()
})
