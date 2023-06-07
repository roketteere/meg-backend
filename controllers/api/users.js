const router = require("express").Router();
const { User, Experience, Journey, EmergencyContact } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll({
      include: [Experience, Journey, EmergencyContact],
    });
    res.status(200).json({
      users: users,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
