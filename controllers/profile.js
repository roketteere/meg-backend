const router = require("express").Router();
const bcrypt = require("bcrypt");
const UserDemo = require("../models/UserDemo");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    res.status(200).json({
      params: req.headers,
    });
  } catch (err) {
    res.status(500).json({
      error: "Error Logging In",
    });
  }
});

module.exports = router;
