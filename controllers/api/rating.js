const router = require("express").Router();
const { Rating } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const ratingData = await Rating.create(req.body);
    res.status(200).json(ratingData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/get", async (req, res) => {
  try {
    const ratingData = await Rating.findAll({
      where: {
        userId: req.body.userId,
      },
    });
    res.status(200).json(ratingData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
