module.exports = {
  NAME: "TMDB_Auth",
  PORT: 5432,
  DB_HOST: "tmdb_auth",
  SECRET: process.env.SECRET || "MILANESA",
};
