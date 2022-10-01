import express, { NextFunction, Request, Response } from 'express';

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
