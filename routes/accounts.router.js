const express = require("express");
const AccountsService = require("../services/accounts.service");

const router = express.Router();
const accountsService = new AccountsService();

router.get("/", async (req, res, next) => {
  try {
    const accounts = await accountsService.getUserAccounts();
    console.log(accounts);
    res.json({ accounts });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
