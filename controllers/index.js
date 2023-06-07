const router = require("express").Router();
const login = require("./login");
const logout = require("./logout");
const signup = require("./signup");
const profile = require("./profile");
const API = require("./api");
const path = require("path");

router.get("/maps", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/maps.html"));
});
router.use("/login", login);
router.use("/logout", logout);
router.use("/signup", signup);
router.use("/profile", profile);
router.use("/api", API);

module.exports = router;
