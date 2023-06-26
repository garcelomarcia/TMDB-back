require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const favorites = require("./routes/favorites-routes");
const cookieParser = require("cookie-parser");
const db = require("./db");

const app = express();

app.use(
  cors({
    origin: [
      "https://localhost:3000",
      "https://tmdb-front-garcelomarcia.vercel.app",
    ], // Replace with your front-end URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.cookie("cookie_name", "cookie_value", {
    sameSite: "none",
    secure: true,
  });
  next();
});

app.use("/api", routes);
app.use("/api/favorites", favorites);

const PORT = process.env.PORT || 3000;

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
});
