import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
// import { Store } from './Store.js'

/* Creating a table in the database. */
export const Article = sequelize.define('articles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    },
})



