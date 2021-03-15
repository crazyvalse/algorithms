/*
332. 重新安排行程

给定一个机票的字符串二维数组 [from, to]，子数组中的两个成员分别表示飞机出发和降落的机场地点，
对该行程进行重新规划排序。所有这些机票都属于一个从 JFK（肯尼迪国际机场）出发的先生，所以该行程必须从 JFK 开始。
提示：

如果存在多种有效的行程，请你按字符自然排序返回最小的行程组合。例如，行程 ["JFK", "LGA"] 与 ["JFK", "LGB"] 相比就更小，排序更靠前
所有的机场都用三个大写字母表示（机场代码）。
假定所有机票至少存在一种合理的行程。
所有的机票必须都用一次 且 只能用一次。

示例 1：
输入：[["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
输出：["JFK", "MUC", "LHR", "SFO", "SJC"]

示例 2：
输入：[["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
输出：["JFK","ATL","JFK","SFO","ATL","SFO"]

解释：另一种有效的行程是["JFK","SFO","ATL","JFK","ATL","SFO"]。但是它自然排序更大更靠后。
 */
/**
 * 回溯法
 * 1. 出口
 * cart.length = tickets.length + 1
 * 2. 参数
 * 3. 递归过程
 * 根据现在的地点找到下一个地点，然后下一个递归过程
 * 4. 剪枝
 * if (!terminal[key]){
 *   return
 * }
 *
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const terminal = tickets.reduce((t, ticket) => {
    const from = ticket[0]
    const to = ticket[1]
    t[from] = t[from] || []
    t[from].push(to)
    return t
  }, {})

  for (let key in terminal) {
    terminal[key].sort()
  }

  let result = []
  const walk = function (key, cart) {
    cart.push(key)
    if (cart.length === tickets.length + 1) {
      result = cart.slice()
      return
    }
    if (result.length === tickets.length + 1) {
      return
    }
    if (!Array.isArray(terminal[key])) {
      return
    }
    // 添加下一个terminal
    const nextTerminals = terminal[key]
    for (let i = 0; i < nextTerminals.length; i++) {
      if (!nextTerminals[i]) {
        continue
      }
      const nextTerminal = nextTerminals[i]
      nextTerminals[i] = null
      walk(nextTerminal, cart)
      cart.pop()
      nextTerminals[i] = nextTerminal
    }
  }
  walk('JFK', [])
  return result
}

module.exports = findItinerary
