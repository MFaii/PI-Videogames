const getPlatforms = require("../../services/platforms.service");

const showPlatforms = async (req, res, next) => {
  try {
    let platforms = await getPlatforms();
    res.status(200).json(platforms);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = showPlatforms;
