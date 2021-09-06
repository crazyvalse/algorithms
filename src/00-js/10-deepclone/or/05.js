const o = {
  a: 1,
  b: {
    c: 'c',
    d: {
      e: 'e',
      f: {
        g: 'g'
      }
    }
  },
  h: {
    i: 'i',
    j: {
      k: 'k'
    }
  }
}

function cloneDeep(x) {
  const root = {}
  const stack = []
  stack.push({
    parent: root,
    key: undefined,
    data: x
  })

  while (stack.length) {
    const node = stack.shift()
    const { parent, key, data } = node
    let res = parent
    if (key !== undefined) {
      res = parent[key] = {}
    }

    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          stack.push({
            parent: res,
            key: k,
            data: data[k]
          })
        } else {
          res[k] = data[k]
        }
      }
    }
  }
  return root
}

console.info(cloneDeep(o))
