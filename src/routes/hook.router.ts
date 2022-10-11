import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
  console.log(req.body); // Call your action on the request here
  res.status(200).end(); // Responding is important
});

export { router as hookRouter };
