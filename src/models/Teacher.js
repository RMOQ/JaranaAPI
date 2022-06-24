import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'

export const Teacher = sequelize.define('teacher', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    teacher_name: {
        type: DataTypes.STRING
    },
    teacher_lastname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    n_doc: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
       
    },
    n_telf: {
        type: DataTypes.INTEGER,
    },

   
})