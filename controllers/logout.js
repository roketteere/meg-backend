
const logout = (req, res, next) =>{
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
}

module.exports = {
  logout,
};
