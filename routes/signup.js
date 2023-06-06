const router = require("express").Router();
const { signUp } = require("../routes/signup");

router.post("/", signUp);

module.exports = router;
