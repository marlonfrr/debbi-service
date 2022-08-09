const express = require("express");
const AccountsService = require("../services/accounts.service");

const router = express.Router();
const accountsService = new AccountsService();

router.get("/:link", async (req, res, next) => {
  const { link } = req.params;
  try {
    const accounts = await accountsService.getUserAccounts(link);
    console.log(accounts);
    res.json({ accounts });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
