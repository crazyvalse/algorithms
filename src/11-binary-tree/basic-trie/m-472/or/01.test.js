const findAllConcatenatedWordsInADict = require('./01')

test('1', () => {
  expect(
    findAllConcatenatedWordsInADict([
      'cat',
      'cats',
      'catsdogcats',
      'dog',
      'dogcatsdog',
      'hippopotamuses',
      'rat',
      'ratcatdogcat'
    ])
  ).toEqual(['catsdogcats', 'dogcatsdog', 'ratcatdogcat'])
})
