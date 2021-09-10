const list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 }
]

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

const result = converse(list)