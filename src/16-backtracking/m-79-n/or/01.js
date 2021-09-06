/*
79. 单词搜索

给定一个二维网格和一个单词，找出该单词是否存在于网格中。
单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
同一个单元格内的字母不允许被重复使用。

示例:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true
给定 word = "SEE", 返回 true
给定 word = "ABCB", 返回 false

提示：

board 和 word 中只包含大写和小写英文字母。
1 <= board.length <= 200
1 <= board[i].length <= 200
1 <= word.length <= 10^3

 */

/**
 * 1. 找到第一个点
 * 2. 然后找下一个
 *  - 走过的不行
 *  - 边线不行
 *  -
 * 回溯法
 *
 * 1. 跳出条件
 * if(cart === word)
 *  return true
 *
 * 遍历上下左右四种方案
 *
 * 2. 参数
 * index cart x, y
 *
 * 3. 递归过程
 *  判断 上下左右是否等于word[index]
 *
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let result = false
  const borderY = board.length
  const borderX = board[0].length
  const used = Array.from({ length: borderY }, () => {
    return new Array(borderX).fill(false)
  })
  const walk = function (index, currentX, currentY) {
    if (index === word.length) {
      result = true
      return
    }
    if (cut(index, currentX, currentY)) {
      return
    }
    used[currentY][currentX] = true
    walk(index + 1, currentX, currentY - 1)
    walk(index + 1, currentX, currentY + 1)
    walk(index + 1, currentX - 1, currentY)
    walk(index + 1, currentX + 1, currentY)
    used[currentY][currentX] = false
  }

  for (let y = 0; y < borderY; y++) {
    for (let x = 0; x < borderX; x++) {
      if (result) {
        break
      }
      if (board[y][x] === word[0]) {
        walk(0, x, y)
      }
    }
  }

  function cut(index, currentX, currentY) {
    if (currentX < 0 || currentX >= borderX || currentY < 0 || currentY >= borderY) {
      return true
    }

    if (used[currentY][currentX] || board[currentY][currentX] !== word[index]) {
      return true
    }
    return result
  }

  return result
}

console.info(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ],
    'SEEC'
  )
)
