import express, { NextFunction, Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import { validateRequest } from '../middlewares/validate-request';
import { BadRequestError } from '../errors/bad-request-error';
import { Link } from '../entity';
import { AppDataSource } from '../data-source';
import { requireAuth } from '../middlewares/require-auth';
import { LinksService } from '../services/links.service';

const router = express.Router();

const linksService = new LinksService();

router.get(
  '/',
  requireAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = await linksService.getAccessToken();
      res.json(token);
    } catch (err) {
      next(err);
    }
  }
);

export { router as tokenRouter };
