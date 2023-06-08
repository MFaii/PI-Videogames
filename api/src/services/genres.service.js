const axios = require("axios");
const { Genre } = require("../db");

const { API_KEY, API_GENRES_URL } = process.env;

const getGenres = async () => {
  const find = await Genre.findAll();
  if (!find.length) {
    let call = await axios.get(API_GENRES_URL + API_KEY);
    let response = call.data.results.map((genre) => ({ name: genre.name }));
    await Genre.bulkCreate(response);
    let genresDB = Genre.findAll();
    return genresDB;
  } else {
    return find;
  }
};

module.exports = { getGenres };
