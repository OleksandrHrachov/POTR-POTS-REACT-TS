import express from 'express';
import { ApiError } from '../error/ApiError';
const { User } = require('../models/models');
import { IUser } from '../models/types';
import bcrypt from 'bcrypt';
import { generateToken } from './helper';
import { IGetDecodedUserData } from '../types/response';

export class UserController {
  async registration(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const { email, password, firstName, lastName } = req.body;
    if (!email || !password || !firstName || !lastName) {
      return next(ApiError.badRequest('Not all data provided!!!'));
    }

    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest('Email already exist'));
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user: IUser = await User.create({
      email,
      password: hashPassword,
      firstName,
      lastName,
    });

    const token = generateToken(user.id, user.email);

    return res.json({ token, userData: user });
  }

  async login(req: express.Request, res: express.Response, next: express.NextFunction) {
    const { email, password } = req.body;
    const user: IUser = await User.findOne({where: {email}});

    if (!user) {
      return next(ApiError.badRequest('User not registered'))
    }

    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.badRequest('Wrong password'));
    }

    const token = generateToken(user.id, user.email);

    return res.json({ token, userData: user });
  }

  async checkAuth(
    req: IGetDecodedUserData,
    res: express.Response,
    next: express.NextFunction
  ) {
    const {user} = req.body;
    const token = generateToken(user.id, user.password);
    return res.json({token});
  }
}
