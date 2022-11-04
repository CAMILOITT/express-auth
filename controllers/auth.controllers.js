import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res
        .status(400)
        .send({ message: 'name, email y password son requeridos' });
    }

    if (password.length < 5) {
      return res
        .status(400)
        .send({ message: 'contraseña debe tener mas de 5 caracteres' });
    }

    if (!email.includes('@')) {
      return res.status(400).send({ message: 'el email debe incluir la @' });
    }

    const user = User.create({
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    });
    res.status(201).json({
      message: 'User Created',
      userId: user.id,
    });
    
  } catch (error) {
    console.error(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      return res.status(404).send({ message: 'usuario no encontrado' });
    }

    const passwordValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordValid) {
      return res.status(401).send({ message: 'la contraseña no es valida' });
    }

    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: 86400,
      }
    );

    res.status(200).send({
      user: { id: user.id, email: user.email, name: user.name },
      message: 'sesión iniciada correctamente',
      accessToken: token,
    });
  } catch (error) {
    console.error(error);
  }
};
