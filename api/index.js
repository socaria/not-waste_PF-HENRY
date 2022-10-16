const server = require("./src/app.js");
const { conn } = require("./src/db.js");
//Hola

// Syncing all the models at once.
conn.sync({ force: false, alter: false }).then(() => {
  server.listen(3001, () => {
    console.log("Escuchando servidor"); // eslint-disable-line no-console
  });
});
