const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const bcrypt = require("bcrypt");
const path = require("path");
const { sequelize } = require("./config");

//routes
const LoginRoute = require("./routes/login");
const LogoutRoute = require("./routes/logout");
const SignupRoute = require("./routes/signup");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// static files
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/login", LoginRoute);
app.use("/api/v1/logout", LogoutRoute);``
app.use("/api/v1/signup", SignupRoute);

// start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
});
