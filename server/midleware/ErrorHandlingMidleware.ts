import e from 'express';
import { ApiError } from '../error/ApiError';
import express from 'express';

export const errorHandler = (err: unknown, req: express.Request, res: express.Response, next: express.NextFunction ) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({message: err.message});
  }

  return res.status(500).json({message: 'Unexpected error!'});
};
