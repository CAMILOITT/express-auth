import { Router } from 'express';
import {
  createPhoto,
  deletePhoto,
  getPhoto,
  getPhotos,
  getPhotoUser,
  updatePhoto,
} from '../controllers/photos.controller.js';
import isUserAuthenticated from './../middlewares/auth.middlewares.js';

const router = Router();

router.get('/photos', isUserAuthenticated, getPhotos);
router.post('/photos', isUserAuthenticated, createPhoto);
router.get('/photos/:id', isUserAuthenticated, getPhoto);
router.put('/photos/:id', isUserAuthenticated, updatePhoto);
router.delete('/photos/:id', isUserAuthenticated, deletePhoto);

router.get('/photos/:id/user', isUserAuthenticated, getPhotoUser);

export default router;
