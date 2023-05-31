const router = require("express").Router();
const login = require("./login");
const logout = require("./logout");
const signup = require("./signup");

router.get("/", (req, res) => {
  try {
    res.send("MEG APP Coming SOON!");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
