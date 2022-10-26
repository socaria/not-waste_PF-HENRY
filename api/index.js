const server = require("./src/app.js");
const { conn } = require("./src/db.js");
// const cors = require("cors");


// server.use(cors());

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log("Escuchando servidor "); // eslint-disable-line no-console
  });
});