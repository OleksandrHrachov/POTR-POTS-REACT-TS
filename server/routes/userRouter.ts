import express, { Router } from 'express';
import { UserController } from '../controllers/userController';

const userController = new UserController();
export const userRouter = Router();
userRouter.post('/registration', userController.registration);
userRouter.post('/login', userController.login);
userRouter.get('/auth', userController.checkAuth);
