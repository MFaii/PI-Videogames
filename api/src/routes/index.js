const { Router } = require("express");

const videoGamesRoute = require("./videogames.routes.js");
const genresRoute = require("./genres.routes.js");
const platformsRoute = require("./platforms.routes.js");

const router = Router();

router.use("/videogames", videoGamesRoute);
router.use("/genres", genresRoute);
router.use("/platforms", platformsRoute);

module.exports = router;
