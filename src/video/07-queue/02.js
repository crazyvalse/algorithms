/*
621. 任务调度器
给定一个用字符数组表示的 CPU 需要执行的任务列表。其中包含使用大写的 A - Z 字母表示的26 种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。CPU 在任何一个单位时间内都可以执行一个任务，或者在待命状态。

然而，两个相同种类的任务之间必须有长度为 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。

你需要计算完成所有任务所需要的最短时间。

示例 ：

输入：tasks = ["A","A","A","B","B","B"], n = 2
输出：8
解释：A -> B -> (待命) -> A -> B -> (待命) -> A -> B.
     在本示例中，两个相同类型任务之间必须间隔长度为 n = 2 的冷却时间，而执行一个任务只需要一个单位时间，所以中间出现了（待命）状态。

提示：

任务的总个数为 [1, 10000]。
n 的取值范围为 [0, 100]。
 */

/**
 * 1. 先统计每个字符的数量 -> numMap
 * 2. 找到最大的那个 塞到 span中
 * 2. 先安放最大的字符到小数组中（长度是n）
 * 3. 放完就用
 *
 * 1. 先做numMap
 * 2. 做排序
 * 3. 从排序列表中 开始取值，没有值的话用 - 补位
 *
 * for 长度是 n -> 制作span
 *
 * @param tasks
 */
function foo(tasks, n) {
  let result = ''
  let span, fix // 长度为n的数组
  let sortCharArray = [] // 字符排序的数组
  // 获得numMap
  let charNumMap = tasks.reduce((pre, cur) => {
    pre[cur] = pre[cur] ? pre[cur] + 1 : 1
    return pre
  }, {})
  //
  const charArray = Object.keys(charNumMap)
  const charArraySt = [].concat(charArray)

  for (let i = 0, len = charArray.length; i < len; i++) {
    let max = null
    let idx = null
    charArraySt.forEach((char, index) => {
      if (max === null) {
        max = charNumMap[char]
        idx = index
      }
      if (max < charNumMap[char]) {
        max = charNumMap[char]
        idx = index
      }
    })
    sortCharArray.push(charArraySt[idx])
    charArraySt.splice(idx, 1)
  }

  while (sortCharArray.length) {
    span = []
    fix = 0
    for (let i = 0; i < n + 1; i++) {
      let idx = i + fix
      if (i < sortCharArray.length - fix) {
        span.push(sortCharArray[idx])
        charNumMap[sortCharArray[idx]]--
        if (charNumMap[sortCharArray[idx]] <= 0) {
          delete charNumMap[sortCharArray[idx]]
          sortCharArray.splice(idx, 1)
          fix--
        }
      } else {
        span.push('-')
      }
    }
    result += span.join('')
  }
  return result.replace(/-+$/g, '').length
}

console.info(foo(['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'E'], 2))
