const { arraySeller } = require("../../public/arraySeller");
const { Seller, City } = require("../../db");

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
        };
    });
    return sellersApi;
};

const getDbInfo = async () => {
    return await Seller.findAll({
        include: {
            model: City,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        },
    });
};

const getAllSellers = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
};

module.exports = { getAllSellers }