/*
递归 -> for

prolog for
 */
// for -> 递归
/**
 * 从0加到n
 * @param n
 */
function sum(n) {
  let result = 0
  for (let i = 0; i <= n; i++) {
    // 上一次的结果 + 这一次i
    // walk(i + 1) walk(i - 1)
    result += i
  }
  return result
}

console.info(sum(10))

/**
 * 1. 暂停的条件
 * 2. 递归的过程
 * 3. 确定参数
 * 4. 返回值
 * @param n
 * @returns {number}
 */
// 回溯法
function sum2(n) {
  let result = 0
  const walk = function (k) {
    // 暂停的条件
    if (k > n) {
      return
    }
    result += k
    walk(k + 1)
  }
  walk(0)
  return result
}

console.info(sum2(10))

function sum3(n) {
  const walk = function (k, result) {
    // 暂停的条件
    if (k > n) {
      return result
    }
    return walk(k + 1, result + k)
  }

  return walk(0, 0)
}

console.info(sum3(10))

// 递归写法 + 记忆化
function sum4(n) {
  // n,...,0
  const walk = function (i) {
    // 暂停条件
    if (i === 0) {
      return 0
    }
    // 上一次的结果 + i
    return walk(i - 1) + i
  }
  return walk(n)
}

console.info(sum4(10))
