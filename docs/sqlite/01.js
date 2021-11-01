const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
})

const User = sequelize.define(
  'User',
  {
    // 在这里定义模型属性
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATE
      // allowNull 默认为 true
    }
  },
  {
    // 这是其他模型参数
  }
)

;(async () => {
  // 如果表不存在,则创建该表(如果已经存在,则不执行任何操作),自动同步所有模型
  await sequelize.sync()

  // 创建一条数据
  // const jane = await User.create({
  //   username: 'janedoe',
  //   birthday: new Date(1980, 6, 20)
  // })
  // console.log(jane.toJSON())

  const [user, created] = await User.findOrCreate({
    where: { username: 'janedoe' }
  })

  console.info(user, created)

  user.username = 'zac'
  user.save()
})()
