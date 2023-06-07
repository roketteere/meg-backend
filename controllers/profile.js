const router = require("express").Router();
const bcrypt = require("bcrypt");
const {User} = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.get("/", async (req, res) => {
  // req.headers.authorization?.split(" ")[1];
  // \? means optional chaining (if the value is null or undefined, the expression short-circuits with a return value of undefined)
  const jwtToken = req.headers.authorization?.split(" ")[1];
  try {
    const verified = jwt.verify(jwtToken, process.env.SESSION_SECRET);
    res.status(200).json({
      Token_Authorized: verified,
    });
  } catch (err) {
    res.status(500).json({
      error: "Error Logging In",
    });
  }
});

module.exports = router;
