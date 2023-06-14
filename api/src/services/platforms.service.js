const axios = require("axios");

const { API_KEY, API_PLATFORMS_URL } = process.env;

const getPlatforms = async () => {
  const call = await axios.get(API_PLATFORMS_URL + API_KEY);
  const platformsData = call.data.results;
  const platformsInfo = platformsData.map((platform) => ({
    id: platform.id,
    name: platform.name,
  }));
  const call2 = await axios.get(API_PLATFORMS_URL + API_KEY + "&page=2");
  const platformsData2 = call2.data.results;
  const platformsInfo2 = platformsData2.map((platform) => ({
    id: platform.id,
    name: platform.name,
  }));
  return platformsInfo.concat(platformsInfo2);
};

module.exports = getPlatforms;
