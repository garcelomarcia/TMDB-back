const Favorites = require("./favorites");
const User = require("./users");

Favorites.belongsTo(User);

module.exports = { User, Favorites };
