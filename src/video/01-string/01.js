// 1. 反转字符串中的单词 557
/**
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * 输入："Let's take LeetCode contest"
 * 输出："s'teL ekat edoCteeL tsetnoc"
 */
/**
 * 1.
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.length
    ? s
        .split(' ')
        .map((item) => item.split('').reverse().join(''))
        .join(' ')
    : ''
}

module.exports = reverseWords
