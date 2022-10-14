
const { Post, Order, Diet } = require("../db");

// TODO traer dieta y precio del producto asociado
const getPosts = async (req, res) => {
    const { diet, price } = req.query;
    let posts;
    try {
        posts = await Post.findAll({
            include: {
                model: Order,
                attributes: ["id"],
                through: {
                    attributes: [],
                },
            },
        });
        res.status(200).send(posts);
    } catch (e) {
        res.status(404).send(e.message);
    }
};


const postPost = async (req, res) => {
    let {
        date,
        amount,
        productId,
    } = req.body

    try {
        if (!date) { throw new Error('Debe definirse una fecha') }
        if (!amount) { throw new Error('Debe definirse una cantidad') }
        if (!productId) { throw new Error('Debe definirse los productos') }
        let newPost = await Post.create({
            date,
            amount
        })
        newPost.setProduct(productId)
        res.send(newPost);
    } catch (e) {
        res.status(500).send(`${e}`)
    }
};

const putPost = async (req, res) => {
    const { id } = req.params;
    let {
        date,
        amount,
        productId,
    } = req.body
    let postToModify = await Post.findByPk(id)
    try {
        if (!date) { throw new Error('Debe definirse una fecha') }
        if (!amount) { throw new Error('Debe definirse una cantidad') }
        if (!productId) { throw new Error('Debe definirse los productos') }
        let postToModify = await Post.upsert({
            id,
            date,
            amount,
            productId
        })
        res.send(postToModify);
    } catch (e) {
        res.status(500).send(`${e}`)
    }
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    let postToDelete = await Post.findByPk(id)
    if (!postToDelete) {
        return res
            .status(404)
            .json({
                error: 'There is not posts with this ID'
            });
    }
    await Post.destroy({ where: { id: id } })
    res.send(`El producto con el id ${id} fue eliminado`);
}

module.exports = {
    getPosts,
    postPost,
    putPost,
    deletePost
};
