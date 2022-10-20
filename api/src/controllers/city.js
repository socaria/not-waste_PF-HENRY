const { City } = require("../db");
const { arraycity } = require("../public/arrayCity.js");

const getCityInfo = async (req, res) => {
  return await City.findAll();
}

module.exports = {
  getCityInfo,
};
