import { Router } from 'express';
import {
  createPhoto,
  deletePhoto,
  getPhoto,
  getPhotos,
  getPhotoUser,
  updatePhoto,
} from '../controllers/photos.controller.js';

const router = Router();

router.get('/photos', getPhotos);
router.post('/photos', createPhoto);
router.get('/photos/:id', getPhoto);
router.put('/photos/:id', updatePhoto);
router.delete('/photos/:id', deletePhoto);

router.get('/photos/:id/user', getPhotoUser);

export default router;
