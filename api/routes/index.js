const MoviesController = require("../controllers/movies");
const { generateToken, validateToken } = require("../config/tokens");
const { validateAuth } = require("../middlewares/auth");
const express = require("express");
const { User } = require("../models");
const axios = require("axios");
const api_key = require("../config");

const baseUrl = "https://api.themoviedb.org/3";

const movieRouter = require("./movies");
const tvRouter = require("./tv");

var router = express.Router();

router.use("/movies", movieRouter);
router.use("/tv", tvRouter);

router.get("/", async (req, res, next) => {
  const resp = await axios.get(
    baseUrl + "/discover/movie?sort_by=popularity.desc&api_key=" + api_key
  );
  res.send(resp.data);
});

router.get("/me", validateAuth, (req, res) => {
  res.send(req.user);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.sendStatus(401);
    }

    const isValid = await user.validatePassword(password);

    if (!isValid) {
      return res.sendStatus(401);
    }

    const payload = {
      username: user.username,
    };
    const token = generateToken(payload);
    res.send(token);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.post("/signup", (req, res) => {
  console.log(req.body);
  User.create(req.body).then((user) => res.status(201).send(user));
});

router.post("/logout", (req, res) => {
  console.log("hola");
  res.clearCookie("token").status(204).send("User logged out");
});

module.exports = router;
