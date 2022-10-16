const product = require("../../public/newProduct-model.json");
const { Product, Diet, Post, Order } = require("../../db");

const getApiInfo = async () => {
  let productApi = product.map((p) => {
    return {
      id: p.id,
      name: p.name,
      price: p.price,
      realValue: p.realValue,
      description: p.description,
      stock: p.stock,
      image: p.image,
      posts: p.posts,
      sellerId: p.sellerId,
    };
  });
  return productApi;
};

const getDbInfo = async () => {
  return await Product.findAll({
    include: [
      {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
      {
        model: Post,
        include: { model: Order },
      },
    ],
  });
};

const getAllProducts = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

module.exports = { getAllProducts };
