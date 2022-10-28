import Express from 'express';
import informationRouter from './routers/information.routers.js';
import photosRouter from './routers/photos.routers.js';
import authRouter from './routers/auth.routers.js';

const app = new Express();

// MIDDLEWARES

app.use(Express.json());

// ROUTERS
app.use(authRouter);
app.use(informationRouter);
app.use(photosRouter);

export default app;
