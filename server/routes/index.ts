import { Router } from 'express';
import { userRouter } from './userRouter';

export const routers = Router();
routers.use('/user', userRouter);
