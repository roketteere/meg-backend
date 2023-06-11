const router = require("express").Router();
const { Journey } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const journeyData = await Journey.create(req.body);

    res.status(200).json(journeyData);
    // res.status(200).json(req.body);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const journeyData = await Journey.findByPk(req.params.id);
    if (!journeyData) {
      res.status(404).json({ message: "No journey found with this id!" });
    }
    res.status(200).json(journeyData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
