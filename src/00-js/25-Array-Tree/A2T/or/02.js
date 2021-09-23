/**
 * 数组转成树
 *
 * 第一层的子节点 parentId === 0
 * 1. 遍历数组 - 找到 parentId === 0 的
 * 2. 遍历数组 - 找到自己的子节点
 * @param A
 * @returns {[]}
 */
function converse(A) {
  const map = A.reduce((pre, cur) => {
    pre.set(cur.id, cur)
    return pre
  }, new Map())

  const result = A.reduce((pre, cur) => {
    const parent = cur.parentId === 0 ? pre : map.get(cur.parentId)
    parent.children = parent.children || []
    parent.children.push(cur)
    return pre
  }, [])
  return [...result.children]
}

module.exports = converse
