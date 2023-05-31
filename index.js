const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const bcrypt = require("bcrypt");
const passport = require("passport");
require("./config/passport")(passport);
const path = require("path");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

// static files
app.use(express.static(path.join(__dirname, "public")));

// start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
