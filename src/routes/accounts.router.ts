import express, { NextFunction, Request, Response } from 'express';
import { AccountsService } from '../services/accounts.service';

const router = express.Router();
const accountsService = new AccountsService();

router.get(
  '/:link',
  async (req: Request, res: Response, next: NextFunction) => {
    const { link } = req.params;
    try {
      const accounts = await accountsService.getUserAccounts(link);
      // console.log(accounts);
      res.json(accounts);
    } catch (error) {
      next(error);
    }
  }
);

export { router as accountsRouter };
