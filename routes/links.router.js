const express = require("express");
const LinksService = require("../services/links.service");

const router = express.Router();
const linksService = new LinksService();

router.get("/token", async (req, res, next) => {
  try {
    const token = await linksService.getAccessToken();
    res.json({ token });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
