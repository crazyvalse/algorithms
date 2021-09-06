/*
展示不同的价格
当价格类型为“预售价”时，满 100 - 20，不满 100 打 9 折
当价格类型为“大促价”时，满 100 - 30，不满 100 打 8 折
当价格类型为“返场价”时，满 200 - 50，不叠加
当价格类型为“尝鲜价”时，直接打 5 折

预售价 - pre
大促价 - onSale
返场价 - back
尝鲜价 - fresh
 */

// 处理预热价
function prePrice(originPrice) {
  if (originPrice >= 100) {
    return originPrice - 20
  }
  return originPrice * 0.9
}

// 处理大促价
function onSalePrice(originPrice) {
  if (originPrice >= 100) {
    return originPrice - 30
  }
  return originPrice * 0.8
}

// 处理返场价
function backPrice(originPrice) {
  if (originPrice >= 200) {
    return originPrice - 50
  }
  return originPrice
}

// 处理尝鲜价
function freshPrice(originPrice) {
  return originPrice * 0.5
}

function askPrice(tag, originPrice) {
  // 处理预热价
  if (tag === 'pre') {
    return prePrice(originPrice)
  }
  // 处理大促价
  if (tag === 'onSale') {
    return onSalePrice(originPrice)
  }

  // 处理返场价
  if (tag === 'back') {
    return backPrice(originPrice)
  }

  // 处理尝鲜价
  if (tag === 'fresh') {
    return freshPrice(originPrice)
  }
}
/*
问题
- 添加新的逻辑的时候，需要改两个地方
  - 添加新的方法
  - 添加if else
 */
