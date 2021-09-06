const SuperStar = {
  name: '小鲜肉',
  playAdvertisement: function (ad) {
    console.info(ad)
  }
}

const ProxyAssistant = {
  name: '经纪人',
  playAdvertisement(reward, ad) {
    if (reward > 1000000) {
      console.info('没问题')
      SuperStar.playAdver1tisement(ad)
    } else {
      console.info('走开 没空')
    }
  }
}

ProxyAssistant.playAdvertisement(10000, '纯蒸酸牛奶，味道纯纯，尽享纯蒸')
