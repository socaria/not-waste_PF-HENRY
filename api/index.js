const server = require("./src/app.js");
const { conn } = require("./src/db.js");
// const { arraySeller } = require("../api/src/public/arraySeller.js");
// const { Seller } = require("../api/src/db");

/* const loadSeller = () => {
  var sellerList = arraySeller.map((s) => {
    const seller = {
      name: s.name,
      password: s.password,
      email: s.email,
      phone: s.phone,
      adress: s.adress,
      cuit: s.cuit,
      image: s.image,
      cities: s.cities,
      category: s.category,
    };
    return seller;
  });
  Seller.bulkCreate(sellerList);
}; */

// Syncing all the models at once.
conn.sync({ force: false, alter: false }).then(async () => {
  // console.log("AQUI", sellerList);
  // await loadSeller();
  server.listen(3001, () => {
    console.log("Escuchando servidor"); // eslint-disable-line no-console
  });
});
