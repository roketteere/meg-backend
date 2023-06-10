const router = require("express").Router();

const {
  User,
  EmergencyContact,
  Experience,
  Journey,
  Rating,
} = require("../../models");

router.post("/", async (req, res) => {
  try {
    const userId = req.body.userId;
    let userData = await User.findByPk(userId, {
      include: [Experience, EmergencyContact, Journey],
      attributes: { exclude: ["password"] },
      // do not include password
    });
    if (!userData) {
      res.status(404).json({ message: "No user found with this id" });
    } else {
      userData = await userData.get({ plain: true });
      res.status(200).json(userData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
