function foo(str) {}


let match = (str) => {
  let len = str.length / 2
  let result = []
  for (let i = 1; i < len; i++) {
    result = merge(result, str, `0{${i}}1{${i}}`)
    result = merge(result, str, `1{${i}}0{${i}}`)
  }
  console.info(result)
}

function merge(result, str, regExpString) {
  let arr = str.match(new RegExp(regExpString, 'g'))
  if (Array.isArray(arr) && arr.length > 0) {
    return result.concat(arr)
  }
  return result
}

match('00110011')
