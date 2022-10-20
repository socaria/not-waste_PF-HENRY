const { Diet } = require("../db");
const { diets } = require("../public/diets");

const getDiets = async (req, res) => {
  return await Diet.findAll();
};


module.exports = {
  getDiets,
};
