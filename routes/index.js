const express = require("express");

const accountsRouter = require("./accounts.router");
const institutionsRouter = require("./institutions.router");
const linksRouter = require("./links.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/accounts", accountsRouter);
  router.use("/institutions", institutionsRouter);
  router.use("/links", linksRouter);
}

module.exports = routerApi;
