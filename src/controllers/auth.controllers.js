import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res
        .status(400)
        .send({ message: 'name, email y password son requeridos' });
    }

    if (password < 5) {
      return res
        .status(400)
        .send({ message: 'contraseña debe tener mas de 5 caracteres' });
    }

    if (!email.include('@')) {
      return res.status(400).send({ message: 'el email debe incluir la @' });
    }

    User.create({
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    });
  } catch (error) {
    console.error(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = User.findOne({ where: { email } });

    if (!user)
      return res.status(404).json({ message: 'usuario no encontrado' });

    const passwordValid = bcrypt.compareSync(password, user.password);

    if (!passwordValid)
      return res.status(401).json({ message: 'la contraseña no es valida' });

    const token = jwt.sign({ id: user.id, name: user.id }, 'secret-key', {
      expiresIn: 86400,
    });

    res
      .send(200)
      .send({
        user: { id: user.id, email: user.email, name: user.name },
        message: 'sesión iniciada correctamente',
        accessToken: token,
      });
  } catch (error) {
    console.error(error);
  }
};
