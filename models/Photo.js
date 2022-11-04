import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Photo = db.define(
  'photo',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'photo',
  }
);

export default Photo;
