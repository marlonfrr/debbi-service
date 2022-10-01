import express, { NextFunction, Request, Response } from 'express';
import { TransactionsService } from '../services/transactions.service';
import { requireAuth } from '../middlewares/require-auth';

const router = express.Router();
const transactionsService = new TransactionsService();

router.get(
  '/:link/search_by_date?',
  requireAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    const { link } = req.params;
    const { date_from, date_to } = req.query;
    try {
      const transactions = await transactionsService.getUserTransactions(
        link,
        date_from,
        date_to
      );
      res.json({ transactions });
    } catch (error) {
      next(error);
    }
  }
);

export { router as transactionsRouter };
