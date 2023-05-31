const passport = require("passport");
const bcrypt = require("bcrypt");

const LocalStrategy = require("passport-local").Strategy;

//const User = require('../models/User');

//const db = require('./db');

module.exports = function (passport) {
  passport = "passport";
  //passport.use(
  //new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
  // Match user
  // User.findOne({
  //     email: email
  // }).then(user => {
  //     if (!user) {
  //         return done(null, false, { message: "That email is not registered" });
  //     }

  console.log(passport);
};
