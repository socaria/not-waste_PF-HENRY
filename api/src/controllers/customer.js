const { Customer } = require("../db");
const clientes = [
  {
    id: 1,
    name: "Juan",
    password: "12345",
    email: "carlos@gmail.com",
    image: "hola",
    city: "Palermo",
  },
  {
    id: 2,
    name: "Carlos",
    password: "12345",
    email: "carlos@gmail.com",
    image: "hola",
    city: "Palermo",
  },
  {
    id: 3,
    name: "Marcos",
    password: "12345",
    email: "carlos@gmail.com",
    image: "hola",
    city: "Palermo",
  },
];
const getCallCustomer = async (req, res) => {
  try {
    let infoDb = await Customer.findAll();
    if (!infoDb.length) {
      const apiUrl = clientes.map((e) => {
        return {
          id: e.id,
          name: e.name,
          password: e.password,
          email: e.email,
          image: e.image,
          city: e.city,
        };
      });
      apiUrl.forEach((e) => {
        Customer.findOrCreate({
          where: {
            id: e.id,
            name: e.name,
            password: e.password,
            email: e.email,
            image: e.image,
            city: e.city,
          },
        });
      });
      return res.status(200).send(apiUrl);
    } else {
      return res.status(200).send(infoDb);
    }
  } catch (error) {
    console.log(error);
  }
};

const postCustomer = async (req, res) => {
  try {
    let { name, password, email, image, city } = req.body;

    if (!name) {
      console.log("El campo del nombre del establecimiento es obligatorio");
    }
    if (!password) {
      console.log("La contraseña debe ser definida");
    }

    if (!email) console.log("El campo del e-mail es obligatorio");

    if (!city) console.log("El campo de la ciudad es obligatorio");

    let newClient = await Customer.create({
      name,
      password,
      email,
      image,
      city,
    });
    console.log(newClient);
    res.status(200).send("creado con exito");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postCustomer,
  getCallCustomer,
};
