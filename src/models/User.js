import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Store } from './Store.js'

export const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
    },
    avatar: {
        type: DataTypes.STRING,
    }
})

// User.hasMany(Store, {
//     foreignKey: 'user_id',
//     sourceKey: 'id'
// })

// Store.belongsTo(User, {
//     foreignKey: 'article_id',
//     targetId: 'id'
// })