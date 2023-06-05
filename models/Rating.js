const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config");

class Rating extends Model {}

Rating.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
      journeyId: {
        type: DataTypes.INTEGER,
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
