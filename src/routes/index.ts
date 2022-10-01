import express, { Request, Response } from 'express';

import { transactionsRouter } from './transactions.router';
import { accountsRouter } from './accounts.router';
import { institutionsRouter } from './institutions.router';
import { linksRouter } from './links.router';
import { signupRouter } from './signup.router';
import { signinRouter } from './signin.router';
import { tokenRouter } from './access-token.router';

export function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/transactions', transactionsRouter);
  router.use('/accounts', accountsRouter);
  router.use('/institutions', institutionsRouter);
  router.use('/links', linksRouter);
  router.use('/signup', signupRouter);
  router.use('/signin', signinRouter);
  router.use('/link', linksRouter);
  router.use('/token', tokenRouter);
  router.use('/accounts', accountsRouter);
}
