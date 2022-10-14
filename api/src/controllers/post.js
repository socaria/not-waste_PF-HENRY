
const { Post, Diet } = require("../db");

const getPosts = async (req, res) => {
    const { diet, price } = req.query;
    let posts;
    try {
        posts = await Post.findAll({
            include: {
                model: Diet,
                attributes: ["name"],
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

//TODO asignar sellerId
const postPost = async (req, res) => {
    let {
        name,
        price,
        realValue,
        description,
        stock,
        imagen,
        diets
    } = req.body

    try {
        if (!name) { throw new Error('Debe definirse un nombre') }
        if (!price) { throw new Error('Debe definirse un precio') }
        if (!realValue) { throw new Error('Debe definirse un valor real') }
        if (!description) { throw new Error('Debe definirse una descripción') }
        if (!stock) { throw new Error('Debe definirse un stock') }
        let newPost = await Post.create({
            name,
            price,
            realValue,
            description,
            stock,
            imagen
        })
        let dietDb = await Diet.findAll({
            where: {
                name: diets,
            },
        });

        newPost.addDiets(dietDb);

        res.send(newPost);

    } catch (e) {
        res.status(500).send(`${e}`)
    }
};

const putPost = async (req, res) => {
    const { id } = req.params;
    let {
        name,
        price,
        realValue,
        description,
        stock,
        imagen,
        diets
    } = req.body
    let postToModify = await Post.findByPk(id)
    try {
        if (!name) { throw new Error('Debe definirse un nombre') }
        if (!price) { throw new Error('Debe definirse un precio') }
        if (!realValue) { throw new Error('Debe definirse un valor real') }
        if (!description) { throw new Error('Debe definirse una descripción') }
        if (!stock) { throw new Error('Debe definirse un stock') }
        let postToModify = await Post.upsert(
            {
                id,
                name,
                price,
                realValue,
                description,
                stock,
                imagen
            }
        )
        let dietDb = await Diet.findAll({
            where: { name: diets }
        })

        postToModify[0].setDiets(dietDb);

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
        res.send('done');    
}

module.exports = {
    getPost,
    postPost,
    putPost,
    deletePost
};
