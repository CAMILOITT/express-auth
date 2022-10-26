import Express from 'express';
import userRouter from './routers/users.routers.js';
import photoRouter from './routers/photos.routers.js';
import loginRouter from './controllers/login.controller.js';


const app = new Express();

app.use(Express.json());

app.use('/api/user', userRouter);
app.use('/api/photo', photoRouter);
app.use('/api/login', loginRouter);

export default app;
