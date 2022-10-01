import express, { NextFunction, Request, Response } from 'express';
import { InstitutionsService } from '../services/institutions.service';

const router = express.Router();
const institutionsService = new InstitutionsService();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const institutions = await institutionsService.getInstitutions();
    res.json({ institutions });
  } catch (error) {
    next(error);
  }
});

export { router as institutionsRouter };
