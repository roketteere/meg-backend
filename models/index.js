const User = require("./User");
const Rating = require("./Rating");
const Journey = require("./Journey");
const Experience = require("./Experience");
const EmergencyContact = require("./EmergencyContact");

User.hasMany(Journey, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Journey.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Rating, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Rating.belongsTo(User, {
  foreignKey: "user_id",
});

Experience.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(EmergencyContact, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

EmergencyContact.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Experience, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  Rating,
  Journey,
  Experience,
  EmergencyContact,
};
