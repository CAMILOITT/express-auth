import { promise } from 'bcrypt/promises.js';
import { Sequelize } from 'sequelize';
import _config from './config.js';

const config = _config[process.env.ENV];

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false,
  port: 5432,
  define: {
    timestamps: false,
  },
});

export default db;