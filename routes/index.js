const express = require("express");

const accountsRouter = require("./accounts.router");
const institutionsRouter = require("./institutions.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/accounts", accountsRouter);
  router.use("/institutions", institutionsRouter);
}

module.exports = routerApi;
