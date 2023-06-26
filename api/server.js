require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const favorites = require("./routes/favorites-routes");
const cookieParser = require("cookie-parser");
const db = require("./db");

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);
app.use("/api/favorites", favorites);

const PORT = process.env.PORT || 3000;

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
});
