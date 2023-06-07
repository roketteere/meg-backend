const router = require("express").Router();
const {Journey} = require("../../models");

router.post("/", async (req, res) => {
  try {
    const journeyData = await Journey.create(req.body);
    res.status(200).json(journeyData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
