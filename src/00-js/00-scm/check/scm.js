const gcd = require('./gcd')

// 最小公倍数
function scm(a, b) {
  return (a * b) / gcd(a, b)
}

module.exports = scm
