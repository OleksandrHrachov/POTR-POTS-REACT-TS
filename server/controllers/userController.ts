import express from 'express';
import { ApiError } from '../error/ApiError';

export class UserController {
  async registration(req: express.Request, res: express.Response) {}

  async login(req: express.Request, res: express.Response) {}

  async checkAuth(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest('No ID'));
    }
    res.json(id);
  }
}
