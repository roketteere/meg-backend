const router = require("express").Router();
const UserDemo = require("../models/UserDemo");

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await UserDemo.findOne({ where: { email: email } });
    res.status(200).json({
      message: "Success!",
      body: {
        email: login.email,
        password: login.password,
      },
    });
  } catch (err) {
    console.log(console.log(`Login Error: ${err}`));
    res.status(500).json({
      error: "Error Logging In",
      err: err,
    });
  }
});

module.exports = router;
