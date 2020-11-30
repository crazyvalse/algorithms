function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}

console.info(gcd(12, 7))

function scm(a, b) {
  return (a * b) / gcd(a, b)
}

console.info(scm( 2, 7))
