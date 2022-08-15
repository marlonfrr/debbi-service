const express = require("express");
const TransactionsService = require("../services/transactions.service");

const router = express.Router();
const transactionsService = new TransactionsService();

router.get("/:link", async (req, res, next) => {
  const { link } = req.params;
  try {
    const transactions = await transactionsService.getUserTransactions(link);
    console.log(transactions);
    res.json({ transactions });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
