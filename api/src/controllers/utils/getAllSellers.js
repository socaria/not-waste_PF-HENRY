const arraySeller = require("../../public/newSeller-model.json")
const { Seller, City, Product, Post, Order } = require("../../db");

const getApiInfo = async () => {
  let sellersApi = arraySeller.map((s) => {
    return {
      id: s.id,
      name: s.name,
      email: s.email,
      phone: s.phone,
      adress: s.adress,
      cuit: s.cuit,
      image: s.image,
      enabled: s.enabled,
      cities: s.cities,
      category: s.category,
      products: s.products
    };
  });
  return sellersApi;
};

const getDbInfo = async () => {
  return await Seller.findAll({
    include: [
      {
        model: City,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
      {
        model: Product,
        include: {
          model: Post,
          include: {
            model: Order,
          },
        },
      },
    ],
  });
};

const getAllSellers = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

module.exports = { getAllSellers };
