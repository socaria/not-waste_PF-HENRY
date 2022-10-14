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

    if (!name) {
      console.log("El campo del nombre del establecimiento es obligatorio");
    }
    if (!email) console.log("El campo del e-mail es obligatorio");

    if (!city) console.log("El campo de la ciudad es obligatorio");

    let newClient = await Customer.create({
      name,
      email,
    });
    let cityDb = await City.findAll({
      where: {
        name: city,
      },
    });

    newClient.addCity(cityDb);

    res.status(200).send("Creado con Exito");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postCustomer,
  getCallCustomer,
};
