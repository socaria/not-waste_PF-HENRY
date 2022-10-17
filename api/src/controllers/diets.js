const { Diet } = require("../db");
const { diets } = require("../public/diets");

const getDiets = async (req, res) => {
  const json = await diets.map((e) => {
    return {
      id: e.id,
      name: e.name,
    };
  });
  // json.forEach((e) => {
  //   Diet.findOrCreate({
  //     where: {
  //       name: e.name,
  //       id: e.id,
  //     },
  //   });
  // });
  return res.status(200).send(json);
};


module.exports = {
  getDiets,
};
