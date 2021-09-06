module.exports = function (a, b) {
  return (a * b) / gcd(a, b)
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}
