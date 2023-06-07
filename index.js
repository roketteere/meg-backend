const express = require("express");
const Sequelize = require("sequelize");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const bcrypt = require("bcrypt");
const path = require("path");
const routes = require("./controllers");
const { sequelize } = require("./config");
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// static files
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// start server
sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
