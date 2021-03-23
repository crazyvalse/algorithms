const data = [
  {
    key: 'name',
    value: '豆皮范儿'
  },
  {
    key: 'age',
    value: 1
  },
  {
    key: 'from',
    value: '数据平台'
  }
]

const processFn = (data) =>
  data.reduce((pre, { key, value }) => {
    return {
      ...pre,
      [key]: value
    }
  }, {})

console.info(processFn(data))
console.info(Object.fromEntries(data.map(Object.values)))
console.info(data.map(Object.values))

console.info(Object.values({ a: 1, b: 2 }))
