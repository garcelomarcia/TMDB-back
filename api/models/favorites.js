const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Favorites extends Model {}

Favorites.init(
  {
    media_id: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    },
    poster_path: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "favorites",
  }
);

module.exports = Favorites;
