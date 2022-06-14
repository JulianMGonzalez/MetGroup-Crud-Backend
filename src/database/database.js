import Sequelize from 'sequelize';

export const sequelize = new Sequelize('metgroup', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
})
