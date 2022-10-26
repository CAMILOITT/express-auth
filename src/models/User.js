import { DataTypes } from 'sequelize';
import db from '../config/database.js';
import Photo from './Photo.js';

const User = db.define(
  'user',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    photo: { type: DataTypes.STRING },
    num_Post: { type: DataTypes.INTEGER },
  },
  { tableName: 'User' }
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
