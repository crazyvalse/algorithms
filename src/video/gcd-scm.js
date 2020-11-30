function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}

console.info(gcd(12, 24))

function scum(a, b) {
  return (a * b) / gcd(a, b)
}

console.info(scum(12, 24))
