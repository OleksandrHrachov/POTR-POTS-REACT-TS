import express from 'express';
import { ApiError } from '../error/ApiError';
const { User } = require('../models/models');
import { IUser } from '../models/types';
import bcrypt from 'bcrypt';
import { generateToken } from './helper';
import { IGetDecodedUserData } from '../types/response';

export class UserController {
  async registration(req: express.Request, res: express.Response) {
    const { email, password, firstName, lastName } = req.body;
    if (!email || !password || !firstName || !lastName) {
      return res.status(404).json({ message: 'Not all data provided!!!' });
    }

    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return res.status(200).json({ message: 'Email already exist' });
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user: IUser = await User.create({
      email,
      password: hashPassword,
      firstName,
      lastName,
    });

    const token = generateToken(user.id, user.email);

    return res.status(201).json({
      token,
      userData: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  }

  async login(req: express.Request, res: express.Response) {
    const { email, password } = req.body;
    const user: IUser = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(200).json({ message: 'User not registered' });
    }

    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return res.status(200).json({ message: 'Wrong password' });
    }

    const token = generateToken(user.id, user.email);

    return res.json({ token, userData: user });
  }

  async checkAuth(req: IGetDecodedUserData, res: express.Response) {
    const { user } = req.body;
    const token = generateToken(user.id, user.password);
    return res.json({ token });
  }
}
