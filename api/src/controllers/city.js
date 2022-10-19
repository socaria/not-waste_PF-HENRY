const { City } = require("../db");
const { arraycity } = require("../public/arrayCity.js");

const getCityInfo = async (req, res) => {
  let json = await arraycity.map((e) => {
    return {
      id: e.id,
      name: e.name,
    };
  });
  // json.forEach((e) => {
  //   City.findOrCreate({
  //     where: {
  //       name: e.name,
  //       id: e.id + 10,
  //     },
  //   });
  // });
  return res.status(200).send(json);
};

module.exports = {
  getCityInfo,
};
