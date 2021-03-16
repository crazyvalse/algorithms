/**
 * @param {string} s
 * @return {string}
 */
// var replaceSpace = function (s) {
//   return s.replace(/\s/g, '%20')
// }

var replaceSpace = function (s) {
  return s.split(' ').join('%20')
}

console.info(replaceSpace('We are  happy.'))
