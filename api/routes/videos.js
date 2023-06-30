const express = require("express");
const linkbaseFile = require("../assets/1681499893886.mp4");

let router = express.Router();

router.get("/linkbase", (req, res) => {
  res.sendFile(linkbaseFile);
});
