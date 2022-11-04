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

const photosRouter = Router();

photosRouter.get('/photos', isUserAuthenticated, getPhotos);
photosRouter.post('/photos', isUserAuthenticated, createPhoto);
photosRouter.get('/photos/:id', isUserAuthenticated, getPhoto);
photosRouter.put('/photos/:id', isUserAuthenticated, updatePhoto);
photosRouter.delete('/photos/:id', isUserAuthenticated, deletePhoto);

photosRouter.get('/photos/:id/user', isUserAuthenticated, getPhotoUser);

export default photosRouter;
