const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config");

class Rating extends Model {}

Rating.init(
  {
    journeyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "journey",
        key: "id",
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 5],
      },
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "rating",
  }
);

module.exports = Rating;
