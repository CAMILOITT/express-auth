import { DataTypes } from 'sequelize';
import db from '../config/database.js';
import Information from './Information.js';
import Photo from './Photo.js';

const User = db.define(
  'User',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  { tableName: 'user' }
);

export default User;

User.hasMany(Photo, {
  foreignKey: 'userId',
  sourceKey: 'id',
});

Photo.belongsTo(User, {
  foreignKey: 'userId',
  targetId: 'id',
});

Information.belongsTo(User, {
  foreignKey: 'userId',
  targetId: 'id',
});
