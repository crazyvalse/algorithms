const map = {
  a: 1,
  b: 2,
  c: 3
}
// =>

const a = ['a', 1, 'b', 2, 'c', 3]

console.info(Object.entries(map).flat());
const result = {}
for (let i = 0; i < a.length - 1; i += 2) {
  result[a[i]] = a[i + 1]
}
console.info(result);
