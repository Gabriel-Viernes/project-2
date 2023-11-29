const sequelize = require('../config/connection')
const {FileRef, User} = require('../models')

const fileRefData = require('./fileRef.json')
const userData = require('./user.json')

const seedDatabase = async() => {
    await sequelize.sync({ force: true})

    const files = await FileRef.bulkCreate(fileRefData, {
        individualHooks: true,
        returning: true
    })
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    })
}

seedDatabase()