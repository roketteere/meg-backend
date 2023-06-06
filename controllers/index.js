const router = require("express").Router();
const login = require("./login");
const logout = require("./logout");
const signup = require("./signup");

// router.get("/", (req, res) => {
//   try {
//     res.send(`
//     <h1 class="bg-dark">Home</h1>
//     <a class="button" href="/login">Login</a>
//     <a href="/logout">Logout</a>
//     <a href="/signup">Signup</a>
//     `);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.use("/login", login);
router.use("/logout", logout);
router.use("/signup", signup);

module.exports = router;
