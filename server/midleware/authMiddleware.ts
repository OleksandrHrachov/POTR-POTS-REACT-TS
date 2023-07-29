import express from 'express';
import { IUser} from '../models/types';
import { ApiError } from '../error/ApiError';
const jwt = require('jsonwebtoken');
import { IGetDecodedUserData } from '../types/response';

export const authMiddleware = (
  req: IGetDecodedUserData,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: 'not authorized!!!' });
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.body.user = decoded;
      next();
    } else {
      return next(ApiError.badRequest('Invalid data'));
    }
  } catch (e) {
    res.status(401).json({ message: 'not authorized!!!' });
  }
};
