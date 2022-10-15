const { arrayProduct } = require("../../public/arrayProduct");
const { Product, Diet, Post } = require("../../db");

const getApiInfo = async () => {
    let productApi = arrayProduct.map((p) => {
        return {
            id: p.id,
            name: p.name,
            price: p.price,
            realValue: p.realValue,
            description: p.description,
            stock: p.stock,
            image: p.image,
            sellerId: p.sellerId
        };
    });
    return productApi;
};

const getDbInfo = async () => {
    return await Product.findAll({
        include: [{
            model: Diet,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        },
        {
            model: Post,
        }
    ]
    });
};

const getAllProducts = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
};

module.exports = { getAllProducts }