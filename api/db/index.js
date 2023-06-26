const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: "localhost", // Use the service name "db" as the host
    port: 5432,
    dialect: "postgres",
    logging: false,
  }
);

module.exports = sequelize;
