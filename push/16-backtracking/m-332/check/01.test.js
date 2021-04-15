const findItinerary = require('./01')

test('1', () => {
  expect(
    findItinerary([
      ['MUC', 'LHR'],
      ['JFK', 'MUC'],
      ['SFO', 'SJC'],
      ['LHR', 'SFO']
    ])
  ).toEqual(['JFK', 'MUC', 'LHR', 'SFO', 'SJC'])
})

test('2', () => {
  expect(
    findItinerary([
      ['JFK', 'SFO'],
      ['JFK', 'ATL'],
      ['SFO', 'ATL'],
      ['ATL', 'JFK'],
      ['ATL', 'SFO']
    ])
  ).toEqual(['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO'])
})
