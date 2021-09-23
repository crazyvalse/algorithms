let timer = setTimeout(() => {
  clearTimeout(timer)
  console.info(!!timer)
}, 1000)
