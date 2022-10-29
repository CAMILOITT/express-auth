import * as dotenv from 'dotenv';
const env = dotenv.config({ path: '.env' });

const config = {
  development: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '0991302721.',
    database: process.env.DB_NAME || 'photos',
    host: process.env.DB_HOST || 'localhost',
    login: false,
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
  },

  test: {
    username: process.env.DB_TEST_USER || 'postgres',
    password: process.env.DB_TEST_PASSWORD || '0991302721.',
    database: process.env.DB_NAME || 'photos',
    host: process.env.DB_TEST_HOST || 'localhost',
    login: false,
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
  },

  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    login: false,
    dialect: 'postgres',
  },
};

export default config;
