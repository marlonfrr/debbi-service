const express = require("express");
const InstitutionsService = require("../services/institutions.service");

const router = express.Router();
const institutionsService = new InstitutionsService();

router.get("/", async (req, res, next) => {
  try {
    const institutions = await institutionsService.getInstitutions();
    res.json({ institutions });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
