const router = require("express").Router();
const { EmergencyContact } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const emergencyData = await EmergencyContact.create(req.body);
    res.status(200).json(emergencyData);
  } catch (err) {
    console.log(`Error Creating Emergency Contact: ${err}`);
    res.status(500).json(err);
  }
});

// Export the router
module.exports = router;
