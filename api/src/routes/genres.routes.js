const { Router } = require("express");
const ShowGenres = require("../controllers/genders/genres.controller");

const genresRouter = Router();

genresRouter.get("/", ShowGenres);

module.exports = genresRouter;
