const router = require("express").Router();

router.post("/", (req, res) => {
  try {
    const { email, password } = req.body;

    res.status(200).json({
      message: "Success!",
      body: {
        email: email,
        password: password,
      },
    });
  } catch (err) {
    console.log(console.log(`Login Error: ${err}`));
    res.status(500).json({
      error: "Error Logging In",
      err: err,
    });
  }
});

module.exports = router;
