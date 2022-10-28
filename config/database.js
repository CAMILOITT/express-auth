import { Sequelize } from 'sequelize';
import _config from './config.js';
// import * as dotenv from 'dotenv';
// dotenv.config();

const env = process.env.ENV;

const config = _config[env];

const db = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'postgres',
  logging: false,
  port: 5432,
  define: {
    timestamps: false,
  },
});

export default db;
