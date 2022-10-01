import express, { Request, Response } from 'express';
import { requireAuth } from '../middlewares/require-auth';
import { LinksService } from '../services/links.service';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();
const linksService = new LinksService();

router.post('/', requireAuth, async (req: Request, res: Response, next) => {
  const link = req.body;
  const userId = req.currentUser.id;
  try {
    linksService.saveUserLink(userId, link);
  } catch (error) {
    next(error);
  }
  res
    .status(StatusCodes.CREATED)
    .send({ data: { msg: 'Link created succesfully' } });
});

export { router as linksRouter };
