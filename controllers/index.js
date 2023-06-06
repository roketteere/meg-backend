const router = require("express").Router();
const login = require("./login");
const logout = require("./logout");
const signup = require("./signup");
const profile = require("./profile");

router.use("/login", login);
router.use("/logout", logout);
router.use("/signup", signup);
router.use("/profile", profile);

module.exports = router;
