const router = require("express").Router();
const bcrypt = require("bcrypt");
const UserDemo = require("../models/UserDemo");

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
      req.session.loggedIn = true;
      req.session.user = login.email.toLowerCase();
      console.log({
        email: login.email,
        password: login.password,
        loggedIn: req.session.loggedIn,
        user: req.session.user,
      });

      res.status(200).json({
        message: "Success!",
        body: {
          email: login.email,
          password: login.password,
          loggedIn: req.session.loggedIn,
          user: req.session.user,
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
