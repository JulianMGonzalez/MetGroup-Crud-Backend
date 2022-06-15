import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
// import { Article } from './Article.js'

/* Creating a table in the database. */
export const Store = sequelize.define('stores', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    },
})
/* 
export const Article = sequelize.define('articles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    },
}) */



/* Creating a relationship between the two tables. */
// Article.belongsToMany(Store, {
//     through: storeArticles
// })
// Store.belongsToMany(Article, {
//     through: storeArticles
// })
