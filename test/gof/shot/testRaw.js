console.info(String.raw`hello \n zac`)

test`hello ${1 + 2} world ${4}`

function test(a, ...b) {
  console.info(String.raw(a, ...b))
}
