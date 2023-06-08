const { Videogame, Genre } = require("../../db");
const {
  getAllGames,
  getOneGame,
  createGame,
} = require("../../services/videogames.service");

const ShowAll = async (req, res, next) => {
  try {
    const { name } = req.query;
    const videogames = await getAllGames();
    if (name) {
      const VideogameFilter = videogames.filter((v) =>
        v.name.toLowerCase().includes(name.toLowerCase())
      );
      VideogameFilter.length
        ? res.status(200).json(VideogameFilter)
        : res.status(400).json("Videogame not found");
    } else {
      res.status(200).json(videogames);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const ShowOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const info = await getOneGame(id);
    if (info) res.status(200).json(info);
    else {
      const dbInfo = await Videogame.findByPk(id);
      res.status(200).json(dbInfo);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const CreateVideogame = async (req, res, next) => {
  try {
    const {
      name,
      background_image,
      platforms,
      rating,
      released,
      description,
      genres,
    } = req.body;

    if (!name || !background_image || !platforms || !description)
      throw new Error(`The field cannot be empty`);
    const newVideogame = await createGame(
      name,
      background_image,
      platforms,
      rating,
      released,
      description
    );

    const allGenres = await Genre.findAll({ where: { name: genres } });
    newVideogame.addGenre(allGenres);
    res.status(201).json("Videogame created successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  ShowAll,
  ShowOne,
  CreateVideogame,
};
