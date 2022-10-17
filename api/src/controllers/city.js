const { City } = require("../db");
const { arrayCity } = require("../public/arrayCity.js");

const getCityInfo = async (req, res) => {
  let json = await arrayCity.map((e) => {
    return {
      id: e.id,
      name: e.name,
    };
  });
  console.log("json city", JSON.stringify(json,null,2))
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
