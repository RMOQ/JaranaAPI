import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'

export const Student = sequelize.define('student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    student_name: {
        type: DataTypes.STRING
    },
    student_lastname: {
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