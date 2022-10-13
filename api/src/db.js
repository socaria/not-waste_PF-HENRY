require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/notwaste`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });
modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Seller, Product, Customer, Manager, Order, Post, City } = sequelize.models;

//Relaciones de Seller
Product.belongsTo(Seller, { through: "seller_product" });
Seller.hasMany(Product, { through: "seller_product" });
Order.belongsTo(Seller, { through: "seller_order" });
Seller.hasMany(Order, { through: "seller_order" });
Product.belongsToMany(City, { through: "seller_city" });
City.belongsToMany(Product, { through: "seller_city" });
Seller.belongsTo(Manager, { through: "manager_seller" });
Manager.hasMany(Seller, { through: "manager_seller" });

// Aca van las Relaciones

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
