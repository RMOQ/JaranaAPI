import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Task } from "./Task.js";

export const Lessons = sequelize.define(
  "lessons",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lesson_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    start_date:{
        type: DataTypes.DATE,
    },
    duration: {
        type: DataTypes.INTEGER,
    }
  },
);

Lessons.hasMany(Task, {
  foreignkey: "lessontId",
  sourceKey: "id",
});
Task.belongsTo(Class, { foreinkey: "lessontId", targetId: "id" });