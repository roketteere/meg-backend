const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.log(`Logout Error: ${err}`);
        res.status(500).json({
          error: "Error Logging Out",
          err: err,
        });
      } else {
        console.log(`Logout Success! Session Destroyed:
        If you see undefined, that's good!
        ${req.session}`);
        res.status(200).json({
          message: "Logout success!",
          session: req.session,
        });
      }
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
