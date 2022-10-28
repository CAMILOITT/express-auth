import { Router } from 'express';
import {
  createInformation,
  getInformation,
  updateInformation,
} from '../controllers/information.controllers.js';
import isUserAuthenticated from './../middlewares/auth.middlewares.js';

const router = Router();

router.get('/information', isUserAuthenticated, getInformation);
router.put('/information', isUserAuthenticated, updateInformation);
router.post('/information', isUserAuthenticated, createInformation);

export default router;
