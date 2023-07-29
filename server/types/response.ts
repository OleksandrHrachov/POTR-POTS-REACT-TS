import express from 'express';
import { IUser } from '../models/types';

export interface IGetDecodedUserData extends express.Request {
  body: {
    user: Pick<IUser, 'id' | 'password'>
  }
};
