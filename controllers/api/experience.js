const router = require("express").Router();
const { Experience } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const experienceData = await Experience.create(req.body);
    res.status(200).json(experienceData);
  } catch (err) {
    console.log(`Error Creating Experience: ${err}`);
    res.status(500).json(err);
  }
});

router.post("/get", async (req, res) => {
  try {
    const experienceData = await Experience.findAll({
      where: {
        userId: req.body.userId,
      },
    });
    res.status(200).json(experienceData);
  } catch (err) {
    console.log(`Error Getting Experiences: ${err}`);
    res.status(500).json(err);
  }
});
module.exports = router;
