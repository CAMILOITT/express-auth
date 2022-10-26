import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getUser,
  getUserPhoto,
  getUsers,
  updateUser,
} from '../controllers/users.controllers.js';

const router = Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:id', getUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

router.get('/users/:id/photos', getUserPhoto);

export default router;
