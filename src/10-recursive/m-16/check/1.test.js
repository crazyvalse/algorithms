const divingBoard = require('./1')

test('1', () => {
  expect(divingBoard(1, 2, 3)).toEqual([3, 4, 5, 6])
})

test('2', () => {
  expect(divingBoard(1, 1, 0)).toEqual([])
})

// test('3', () => {
//   expect(divingBoard(2, 10, 30)).toEqual([
//       60,  68,  76,  84,  92, 100, 108,
//       116, 124, 132, 140, 148, 156, 164,
//       172, 180, 188, 196, 204, 212, 220,
//       228, 236, 244, 252, 260, 268, 276,
//       284, 292, 300
//     ]
//   )
// })
