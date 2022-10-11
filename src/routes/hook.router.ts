import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  console.log(req.body); // Call your action on the request here
  res.status(200).send({ msg: 'Hola' }); // Responding is important
});

export { router as hookRouter };
