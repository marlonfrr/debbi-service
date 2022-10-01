import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import { validateRequest } from '../middlewares/validate-request';
import { BadRequestError } from '../errors/bad-request-error';
import { User } from '../entity';
import { AppDataSource } from '../data-source';

const router = express.Router();

const userRepository = AppDataSource.getRepository(User);

router.post(
  '/',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const existingUser = await userRepository.find({
      where: {
        email: email,
      },
    });

    console.log(existingUser);

    if (Object.keys(existingUser).length !== 0) {
      throw new BadRequestError('Email in use');
    }

    const newUser = await userRepository.create({
      username,
      email,
      password,
    });

    await userRepository.save(newUser);

    //Generate JWT
    const userJWT = jwt.sign(
      {
        id: newUser.id,
        email: newUser.email,
      },
      process.env.JWT_KEY!
    );

    req.session = {
      jwt: userJWT,
    };

    res.status(201).send(newUser);
  }
);

export { router as signupRouter };
