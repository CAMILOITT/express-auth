import Photo from '../models/Photo.js';
import User from '../models/User.js';

export const getPhotos = async (res, req) => {
  try {
    const photos = await Photo.findAll();
    res.json(photos);
  } catch (error) {
    console.log('error: ', error);
  }
};

export const getPhoto = async (res, req) => {
  try {
    const { id } = req.params;
    const photo = await Photo.findByPk(id);
    res.json(photo);
  } catch (error) {
    console.log('error: ', error);
  }
};

export const createPhoto = async (res, req) => {
  try {
    const { photo, description, userId } = req.body;

    const newPhoto = Photo.create({ photo, description, userId });

    res.json(newPhoto);
  } catch (error) {
    console.log('error: ', error);
  }
};

export const updatePhoto = async (res, req) => {
  try {
    const { id } = req.params;
    const photo = await Photo.findByPk(id);

    photo.set(req.body);
    photo.save();

    res.json(photo);
  } catch (error) {
    console.log('error: ', error);
  }
};

export const deletePhoto = async (res, req) => {
  try {
    const { id } = req.params;
    await Photo.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    console.log('error: ', error);
  }
};

export const getPhotoUser = async (res, req) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    res.json(user);
  } catch (error) {
    console.log('error: ', error);
  }
};
