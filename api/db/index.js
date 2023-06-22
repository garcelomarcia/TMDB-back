const Sequelize = require("sequelize");

const sequelize = new Sequelize("tmdb_auth", "user", "password", {
  host: "db", // Use the service name "db" as the host
  port: 5432,
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
