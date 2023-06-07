const router = require("express").Router();
const bcrypt = require("bcrypt");
const UserDemo = require("../models/UserDemo");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await UserDemo.findOne({ where: { email: email } });
    if (!login) {
      res.status(400).json({
        message: "Email Not Found",
      });
    }
    const validPassword = await bcrypt.compare(password, login.password);
    if (!validPassword) {
      res.status(400).json({
        message: "Password Invalid",
      });
    } else {
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
      console.log({
        email: login.email,
        password: login.password,
        jwtToken: jwtToken,
      });

      res.status(200).json({
        message: "Success!",
        body: {
          email: login.email,
          password: login.password,
          jwtToken: jwtToken,
        },
      });
    }
  } catch (err) {
    console.log(console.log(`Login Error: ${err}`));
    res.status(500).json({
      error: "Error Logging In",
      err: err,
    });
  }
});

module.exports = router;
