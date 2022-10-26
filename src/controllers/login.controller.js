import bcrypt from 'bcrypt';
import LoginRouter from 'express';
import User from './../models/User.js';

const loginRouter = LoginRouter.post('/', async (req, res) => {
  const { name } = req.body;
  const user = await User.findOne({ name });
  const passwordCorrect =
    user === null
      ? false
      : await bcrypt.compare(password, user.passwordCorrect);

  if (!passwordCorrect) {
    res.status(401).json({ error: 'invalid password' });
  }
  res.sen({ name: user.name });
});

export default loginRouter;
