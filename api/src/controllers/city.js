const { City } = require("../db");
const { arrayCity } = require("../public/api");

const getCityInfo = async (req, res) => {
  let json = await arrayCity.map((e) => {
    return {
      id: e.id,
      name: e.name,
    };
  });
  json.forEach((e) => {
    City.findOrCreate({
      where: {
        name: e.name,
        id: e.id,
      },
    });
  });
  return res.status(200).send(json);
};

module.exports = {
  getCityInfo,
};
