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
  return A.filter((item) => {
    item.children = A.filter((it) => item.id === it.parentId)
    return item.parentId === 0
  })
}

exports.converse = converse
