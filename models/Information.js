import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Information = db.define(
  'information',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'information',
  }
);

export default Information;
