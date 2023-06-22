const express = require("express");
const router = express.Router();
const axios = require("axios");
const api_key = require("../config");

const baseUrl = "https://api.themoviedb.org/3";

router.get("/:id", async (req, res, next) => {
  const resp = await axios.get(
    baseUrl + "/movie/" + req.params.id + "?api_key=" + api_key
  );
  res.send(resp.data);
});

module.exports = router;
