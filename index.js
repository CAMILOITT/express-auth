import app from './app.js';
import db from './config/database.js';
import './models/Photo.js';
import './models/User.js';
import './models/Information.js';

async function connect() {
  try {
    await db.authenticate();
    await db.sync({ force: true });
    app.listen(3005);
    console.log('connect successful in port: 3005');
  } catch (error) {
    console.log('error in the connection: ', error);
  }
}
connect();


