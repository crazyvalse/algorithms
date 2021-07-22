const SuperStar = {
  name: '小鲜肉',
  playAdvertisement: function (ad) {
    console.info(ad)
  }
}

const ProxyAssistant = {
  name: '经纪人',
  scheduleTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  },
  playAdvertisement(reward, ad) {
    if (reward > 1000000) {
      console.info('没问题，安排上了')
      ProxyAssistant.scheduleTime().then(() => {
        SuperStar.playAdvertisement(ad)
      })
    } else {
      console.info('走开 没空')
    }
  }
}

ProxyAssistant.playAdvertisement(100000000, '纯蒸酸牛奶，味道纯纯，尽享纯蒸')
