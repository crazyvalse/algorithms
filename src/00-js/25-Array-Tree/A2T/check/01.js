/**
 * 数组转成树
 *
 * 第一层的子节点 parentId === 0
 * 1. 遍历数组 - 找到 parentId === 0 的
 * 2. 遍历数组 - 找到自己的子节点
 * @param a
 * @returns {[]}
 */
function converse(a) {
  return a.filter((item) => {
    item.children = a.filter((si) => si.parentId === item.id)
    return item.parentId === 0
  })
}

exports.converse = converse
