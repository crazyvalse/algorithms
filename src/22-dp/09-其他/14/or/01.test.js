const checkInclusion = require('./01')

test('1', () => {
  expect(checkInclusion('ab', 'eidbaooo')).toEqual(true)
})

test('2', () => {
  expect(checkInclusion('ab', 'eidboaoo')).toEqual(false)
})

test('3', () => {
  expect(checkInclusion('adc', 'dcda')).toEqual(true)
})

test('4', () => {
  expect(checkInclusion('hello', 'ooolleoooleh')).toEqual(false)
})
