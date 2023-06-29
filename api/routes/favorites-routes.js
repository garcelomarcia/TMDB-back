const { User, Favorites } = require("../models");
const express = require("express");

let router = express.Router();

router.post("/", async (req, res, next) => {
  console.log(req.body);
  const { username } = req.body;
  const user = await User.findOne({
    where: {
      username: username,
    },
  });

  const movieList = await Favorites.findAll({
    where: {
      userId: user.id,
      type: "movies",
    },
  });
  const tvList = await Favorites.findAll({
    where: {
      userId: user.id,
      type: "tv",
    },
  });
  const payload = {
    movieList: movieList,
    tvList: tvList,
  };
  res.send(payload);
});

router.post("/:id", (req, res, next) => {
  let { media_id, type, poster_path, username } = req.body;
  console.log(media_id, type, username);
  User.findOne({
    where: {
      username: username,
    },
  }).then((user) => {
    Favorites.findOrCreate({
      where: {
        media_id: media_id,
        type: type,
        poster_path: poster_path,
        userId: user.id,
      },
      include: User,
    }).then((favorite) => res.send(favorite));
  });
});

router.delete("/:id", (req, res, next) => {
  Favorites.destroy({
    where: {
      media_id: req.params.id,
    },
  })
    .then((result) => {
      console.log(result);
      res.sendStatus(202);
    })
    .catch(next);
});
module.exports = router;
