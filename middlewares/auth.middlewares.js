import jwt from 'jsonwebtoken';


const isUserAuthenticate = (req, res, next) => {
  const authHeader = req.headers.authenticate;

  if (!authHeader) {
    return res.status(403).json({
      status: 403,
      message: 'prohibido',
    });
  } else {
    const token = authHeader.split(' ')[1];
    let payload;

    if (token) {
      try {
        payload = jwt.verify(token, 'secret');
        next();
      } catch (err) {
        if (err instanceof jwt.JsonWebTokenError) {
          return res.status(401).json({
            status: 401,
            message: 'no estas autorizado',
          });
        }
        console.error(err);

        return res.status(400).end();
      }
    } else {
      return res.status(403).json({
        status: 403,
        message: 'FORBIDDEN',
      });
    }
  }
};

export default isUserAuthenticate;
