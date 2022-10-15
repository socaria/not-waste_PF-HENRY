const { Customer, City } = require("../db");

const getCallCustomer = async (req, res) => {
  try {
    let infoDb = await Customer.findAll({
      include: {
        model: City,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    if (!infoDb.length) {
      return res.status(400).send("No hay nada en la base de datos");
    } else {
      return res.status(200).send(infoDb);
    }
  } catch (error) {
    console.log(error);
  }
};

const postCustomer = async (req, res) => {
  try {
    let { name, email, city } = req.body;

    if (!name) { throw new Error('El nombre de usuario debe estar definido') }
    if (!email) { throw new Error('El enail de usuario debe estar definido') }

    let newCustomer = await Customer.create({
      name,
      email,
    });
    if (city) {
      let cityDb = await City.findAll({
        where: {
          name: city,
        },
      });
      newCustomer.addCity(cityDb);
    }

    res.status(200).send(newCustomer);
  } catch (e) {
    res.status(500).send(`${e}`)
  };
}
module.exports = {
  postCustomer,
  getCallCustomer,
}
