const instanceOf = require('./01')

test(`1`, () => {
  function Person() {}
  const p = new Person()
  expect(instanceOf(p, Person)).toEqual(true)
})
