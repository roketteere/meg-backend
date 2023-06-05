const User = require("./User");
const UserDemo = require("./UserDemo");
const Profile = require("./Profile");
const Rating = require("./Rating");
const Journey = require("./Journey");
const Experience = require("./Experience");
const EmergencyContact = require("./EmergencyContact");

// User.hasOne(Profile, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

// Profile.belongsTo(User, {
//   foreignKey: "user_id",
// });

module.exports = {
  User,
  Profile,
  UserDemo,
  Rating,
  Journey,
  Experience,
  EmergencyContact,
};
