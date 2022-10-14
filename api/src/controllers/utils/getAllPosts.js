const { arrayPost } = require("../../public/arrayPost");
const { Post, Order } = require("../../db");

const getApiInfo = async () => {
    let postApi = arrayPost.map((p) => {
        return {
            id: p.id,
            dat: p.date,
            amount: p.amount,
        };
    });
    return postApi;
};

const getDbInfo = async () => {
    return await Post.findAll({
        include: {
            model: Order,
            attributes: ["id"],
            through: {
                attributes: [],
            },
        },
    })
};

const getAllPosts = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
};

module.exports = { getAllPosts }