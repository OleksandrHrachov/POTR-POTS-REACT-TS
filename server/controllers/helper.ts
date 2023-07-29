const jwt = require('jsonwebtoken');

export const generateToken = (id: string, email: string) => {
  return jwt.sign(
    { id: id, email: email },
    process.env.SECRET_KEY,
    { expiresIn: '24h' }
  )
};
