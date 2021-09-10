const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 }
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3
}

// flatten(obj) 结果返回如下
// {
//  'a.b': 1,
//  'a.c': 2,
//  'a.d.e': 5,
//  'b[0]': 1,
//  'b[1]': 3,
//  'b[2].a': 2,
//  'b[2].b': 3
//   c: 3
// }

/*

1. 放到result中
或者继续遍历
2. 组成key

typeof

1. 遍历对象
使用 for in 遍历
createKey: key + subKey

key: 是父级的key
newKey = 'subkey'
typeof subkey === 'string'
newKey = `.${subkey}`
typeof subkey === 'number'
newKey = `[${subkey}]`

if(typeof a === 'object' && a ){
  const key =
}

参数 parentKey, obj

if(!obj){
  return
}

const result = {}
const walk = function(obj, parentKey) {

}

 */

function flatten(obj) {
  const result = {}
  const walk = function (obj, parentKey) {
    // 处理普通的
    for (let key in obj) {
      const newKey = parentKey + getKey(key, parentKey)
      if (obj[key] && typeof obj[key] === 'object') {
        walk(obj[key], newKey)
      } else {
        result[newKey] = obj[key]
      }
    }
  }
  walk(obj, '')
  return result
}

function getKey(key, parentKey) {
  if (parentKey && typeof key === 'string') {
    return `.${key}`
  }
  if (parentKey && typeof key === 'number') {
    newKey = `[${key}]`
  }
  return key
}

console.info(flatten(obj))
