const express = require("express");
const path = require("path");

let router = express.Router();

router.get("/linkbase", (req, res) => {
  const videoFilePath = path.join(__dirname, "../assets/1681499893886.mp4");
  res.sendFile(videoFilePath);
});

module.exports = router;
