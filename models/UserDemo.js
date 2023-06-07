// // sequelize model for User table
// const { DataTypes, Model } = require("sequelize");
// const bcrypt = require("bcrypt");
// const { sequelize } = require("../config");

// class UserDemo extends Model {}

// UserDemo.init(
//   {
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "userDemo",
//   }
// );

// module.exports = UserDemo;
