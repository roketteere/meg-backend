const router = require("express").Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      number,
      allergies,
      preferredHospital,
    } = req.body;
    // let passwordHash = await bcrypt.hash(password, 3);
    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      number: number,
      allergies: allergies,
      preferredHospital: preferredHospital,
    });
    const jwtToken = jwt.sign(
      {
        email: newUser.email,
        userId: newUser.id,
      },
      process.env.SESSION_SECRET,
      {
        expiresIn: "3h",
      }
    );
    console.log(`New User Created: ${newUser}
    jwtToken: ${jwtToken}
    `);
    res.status(200).json({
      message: "Signup Success!",
      New_User: {
        email: newUser.email,
        password: newUser.password,
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
