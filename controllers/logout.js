const router = require("express").Router();

router.post("/", (req, res) => {
  try {
    res.status(200).json({
      message: "Logout success!",
    });
  } catch (err) {
    console.log(`Logout Error: ${err}`);
    res.status(500).json({
      error: "Error Logging Out",
      err: err,
    });
  }
});
module.exports = router;
