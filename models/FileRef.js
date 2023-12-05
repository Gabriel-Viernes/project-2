const {Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class FileRef extends Model {}

FileRef.init(
    {
        filename: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        uuid: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscore:true,
        modelName: 'FileRef'
    }
)
module.exports = FileRef;