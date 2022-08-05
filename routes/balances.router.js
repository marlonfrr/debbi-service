const express = require("express");
const BalancesService = require("../services/balances.service");

const router = express.Router();
const balancesService = new BalancesService();

router.get("/", async (req, res, next) => {
  try {
    const balance = balancesService.getBankBalance();
    console.log(balance);
    res.json({ balance });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
