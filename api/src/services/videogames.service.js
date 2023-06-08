const axios = require("axios");

const { API_GAMES_URL, API_KEY } = process.env;

const { Videogame, Genre } = require("../db");

const getAllGames = async () => {
  const call = await axios.get(API_GAMES_URL + API_KEY + `&page_size=100`);
  const videogameData = call.data.results;
  const videogameInfo = videogameData.map((videogame) => {
    return {
      id: videogame.id,
      name: videogame.name,
      released: videogame.released,
      background_image: videogame.background_image,
      rating: videogame.rating,
      platforms: videogame.platforms.map((platform) => platform.platform.name),
      genres: videogame.genres.map((genre) => genre.name),
    };
  });
  let dbVideogames = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  dbVideogames = dbVideogames.map((v) => ({
    ...v.dataValues,
    genres: v.dataValues.genres.map((v) => v.name),
  }));
  const allVideogames = videogameInfo.concat(dbVideogames);
  return allVideogames;
};

const getOneGame = async (id) => {
  const call = await axios.get(API_GAMES_URL + `/${id}` + API_KEY);
  const videogameData = call.data;
  return {
    id: videogameData.id,
    name: videogameData.name,
    released: videogameData.released,
    background_image: videogameData.background_image,
    rating: videogameData.rating,
    platform: videogameData.platforms.map((platform) => platform.platform.name),
    description: videogameData.description,
  };
};

const createGame = async (
  name,
  background_image,
  platforms,
  rating,
  released,
  description,
  genres
) => {
  let postGame = await Videogame.create({
    name,
    background_image,
    platforms,
    rating,
    released,
    description,
    genres,
  });
  return postGame;
};

module.exports = { getAllGames, getOneGame, createGame };
