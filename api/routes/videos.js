const express = require("express");

let router = express.Router();

router.get("/linkbase", (req, res) => {
  res.sendFile("./api/assets/1681499893886.mp4");
});

module.exports = router;
