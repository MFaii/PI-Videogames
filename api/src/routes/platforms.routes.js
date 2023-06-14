const { Router } = require("express");
const showPlatforms = require("../controllers/platforms/platforms.controller");

const PlatformsRouter = Router();

PlatformsRouter.use("/", showPlatforms);

module.exports = PlatformsRouter;
