const gcd = require('./gcd')

function scm(a, b) {
  return (a * b) / gcd(a, b)
}

module.exports = scm
