const { Diet } = require("../db");
const { dietas } = require("../public/dietas");
// console.log(dietas);
const getDietas = async (req, res) => {
  const json = await dietas.map((e) => {
    return {
      id: e.id,
      name: e.name,
    };
  });
  json.forEach((e) => {
    Diet.findOrCreate({
      where: {
        name: e.name,
        id: e.id,
      },
    });
  });
  return res.status(200).send(json);
};

module.exports = {
  getDietas,
};
