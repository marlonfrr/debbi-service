import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';
import { Password } from '../utils/password';
import { validateRequest } from '../middlewares/validate-request';
import { BadRequestError } from '../errors/bad-request-error';
import { AppDataSource } from '../data-source';
import { config } from '../config/config';

import { User } from '../entity/User';
import { object } from 'joi';

const router = express.Router();

const userRepository = AppDataSource.getRepository(User);

router.post(
  '/',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('You must supply a password'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await userRepository.findOne({
      where: { email: email },
    });

    if (!existingUser) {
      throw new BadRequestError('Invalid credentials');
    }
    const passwordsMatch = await Password.compare(
      existingUser.password,
      password
    );
    if (!passwordsMatch) {
      throw new BadRequestError('Invalid credentials');
    }
    //Generate JWT
    const userJWT = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email,
      },
      config.JWT_KEY
    );

    console.log(req.session);

    req.session = {
      jwt: userJWT,
    };
    console.log(req.session);

    res.status(200).send({ msg: 'Logged in succesfully' });
  }
);

export { router as signinRouter };
