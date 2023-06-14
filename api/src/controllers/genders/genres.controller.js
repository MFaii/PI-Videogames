const { getGenres } = require("../../services/genres.service");

const ShowGenres = async (req, res, next) => {
  try {
    let genres = await getGenres();
    res.status(200).json(genres);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = ShowGenres;
