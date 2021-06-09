/**
 * 1. 同样的处理过程 - 从字符串中获得三个小于256的字符，并放到数组中
 * 2. 同样的输入输出 - 数组和字符串
 * 3. 临界点 - 数组长度是4 并且 字符 ===源字符串
 * @param str
 * @returns {Array}
 */

export default (str) => {
  let r = []
  let search = (cur, sub) => {
    if (cur.length === 4 && cur.join('') === str) {
      r.push(cur.join('.'))
    } else {
      for (let i = 0, len = Math.min(3, sub.length), temp; i < len; i++) {
        temp = sub.substr(0, i + 1)
        if (temp < 256) {
          search(cur.concat([temp]), sub.substr(i + 1))
        }
      }
    }
  }
  search([], str)
  return r
}
