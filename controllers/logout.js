const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    // localStorage.removeItem("token");
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
