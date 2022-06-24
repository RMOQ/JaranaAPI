const Sequelize = require ('sequelize');

export const sequelize = new Sequelize('jarana','postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});