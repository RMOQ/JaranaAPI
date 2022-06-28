import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'
import { Student  } from './Student.js';
import { Teacher } from './Teacher.js'

export const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_name: {
        type: DataTypes.STRING
    },
    user_lastname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
       
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User.hasOne(Student, {
    foreignKey: {
        name:"userId",
        allowNull: false
      },
    sourceKey: "id",
    onDelete: 'CASCADE'
});

Student.belongsTo(User, { foreinkey: "userId", targetId: "id" });

User.hasOne(Teacher, {
    foreignKey: {
        name:"userId",
        allowNull: false
      },
    sourceKey: "id",
    onDelete: 'CASCADE'
});

Teacher.belongsTo(User, { foreinkey: "userId", targetId: "id" });