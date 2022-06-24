import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'
import { Student  } from './Student.js';
import { Teacher } from './Teacher.js'


export const Group = sequelize.define(
    "group",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      group_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
  );

    Group.hasMany(Student, {
        foreignKey: {
            name:"groupId",
            allowNull: false
        },
        sourceKey: "id",
        onDelete: 'CASCADE'
    });

    Student.belongsTo(Group, { foreinkey: "groupId", targetId: "id" });

    Group.hasOne(Teacher, {
        foreignKey: {
            name:"groupId",
            allowNull: false
          },
        sourceKey: "id",
        onDelete: 'CASCADE'
    });
  

    Teacher.belongsTo(Group, { foreinkey: "groupId", targetId: "id" });

    