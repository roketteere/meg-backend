const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config");

class EmergencyContact extends Model {}

EmergencyContact.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20],
      },
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 10],
      },
    },
    relationship: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "emergencyContact",
  }
);

module.exports = EmergencyContact;
