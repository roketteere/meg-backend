const router = require("express").Router();
const emergency = require("./emergency");
const experience = require("./experience");
const journey = require("./journey");
const users = require("./users");
const rating = require("./rating");
const profile = require("./profile");

router.use("/emergency", emergency);
router.use("/experience", experience);
router.use("/journey", journey);
router.use("/profile", profile);
router.use("/rating", rating);
router.use("/users", require("./users"));

module.exports = router;
