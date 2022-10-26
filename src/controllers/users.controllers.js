import Photo from '../models/Photo.js';
import User from '../models/User.js';

export const getUsers = async (res, req) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.log('error: ', error);
  }
};

export const getUser = async (res, req) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    res.json(user);
  } catch (error) {
    console.log('error: ', error);
  }
};

export const createUser = async (res, req) => {
  try {
    const { name, description, photo } = req.body;

    const newUser = await User.create({
      name,
      description,
      photo,
    });

    res.json(newUser);
  } catch (error) {
    console.log('error: ', error);
  }
};

export const updateUser = async (res, req) => {
  try {
    const { id } = req.params;
    const { name, description, photo } = req.body;

    await User.findByPk(id);
    User.name = name;
    User.description = description;
    User.photo = photo;

    await User.save();

    res.json(User);
  } catch (error) {
    console.log('error: ', error);
  }
};

export const deleteUser = async (res, req) => {
  try {
    const { id } = req.params;

    const user = await User.destroy({ where: { id } });
    console.log(user);
    return res.send({ message: 'user delete' }).sendStatus(204);
  } catch (error) {
    console.log('error: ', error);
  }
};

export const getUserPhoto = async (res, req) => {
  try {
    const { id } = req.params;
    const photos = await Photo.findAll({
      where: { userId: id },
    });
    res.json(photos);
  } catch (error) {
    console.log('error: ', error);
  }
};
