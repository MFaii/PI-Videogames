const { Router } = require("express");

// Import all routers
const {
  ShowAll,
  ShowOne,
  CreateVideogame,
} = require("../controllers/videogames/videogames.controller");

const router = Router();

// Show all Videogames
router.get("/", ShowAll);

// Show specific videogame
router.get("/:id", ShowOne);

// Create videogame
router.post("/", CreateVideogame);

// Delete videogame
router.delete("/:id");

module.exports = router;
