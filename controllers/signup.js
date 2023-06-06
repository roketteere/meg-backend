const router = require("express").Router();
const { UserDemo } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    let passwordHash = await bcrypt.hash(password, 3);
    const newDemoUser = await UserDemo.create({
      email: email,
      password: passwordHash,
    });
    const jwtToken = jwt.sign(
      {
        email: login.email,
        userId: login.id,
      },
      process.env.SESSION_SECRET,
      {
        expiresIn: "3h",
      }
    );
    console.log(`New User Created: ${newDemoUser}
    jwtToken: ${jwtToken}
    `);
    res.status(200).json({
      message: "Signup Success!",
      New_User: {
        email: newDemoUser.email,
        password: newDemoUser.password,
        jwtToken: jwtToken,
      },
    });
  } catch (err) {
    console.log(console.log(`Signup Error: ${err}`));
    res.status(500).json({
      error: "Error Signing Up",
      err: err,
    });
  }
});

module.exports = router;
