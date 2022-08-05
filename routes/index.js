const express = require("express");

const balancesRouter = require("./balances.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/balances", balancesRouter);
}

module.exports = routerApi;
