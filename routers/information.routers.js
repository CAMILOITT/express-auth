import { Router } from 'express';
import {
  createInformation,
  getInformation,
  updateInformation,
} from '../controllers/information.controllers.js';
import isUserAuthenticated from './../middlewares/auth.middlewares.js';

const informationRouter = Router();

informationRouter.get('/information', isUserAuthenticated, getInformation);
informationRouter.put('/information', isUserAuthenticated, updateInformation);
informationRouter.post('/information', isUserAuthenticated, createInformation);

export default informationRouter;
