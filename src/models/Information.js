import { DataTypes } from 'sequelize';
import db from '../config/database';

const Information = db.define(
  'Information',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    photo: { type: DataTypes.STRING },
  },
  { tableName: 'information' }
);

export default Information;
