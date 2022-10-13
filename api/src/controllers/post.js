const { Router } = require("express");
const { Post } = require("../db");

const getPostByCity = async (req, res) => {
    const { city } = req.params;
    let posts = await Post.findAll({ where: { city: city } });
    //   console.log(posts);
    if (posts.length) {
        res.status(200).send(posts);
    } else {
        res.status(404).json("No se encontraron proveedores en esa ciudad");
    }
};

// Ruta get va a buscar a todos los proveedores de la base de datos. Si llegasen las propiedades
// name o store cateogry por query se retornarán los proveedores que coincidan con lo solicitado
const getPosts = async (req, res) => {
    const { name, category } = req.query;
    let posts;
    try {
        posts = await Post.findAll();
        if (name) {
            posts = posts.filter(s => {
                s.name === name
            });
            if (!posts.length) {
                throw new Error('No hay proveedores con ese nombre')
            };
        }
        if (category) {
            posts = posts.filter(s => s.category === category)
            if (!posts.length) {
                throw new Error('No hay proveedores con esa categoría de establecimiento')
            };
        }
        res.status(200).send(posts);
    } catch (e) {
        res.status(404).send(e.message);
    }
};

const postPost = async (req, res) => {
    let {
        name,
        password,
        phone,
        email,
        adress,
        cuit,
        imagen,
        city,
        category,
        enabled
    } = req.body

    try {
        if (!name) { throw new Error('El campo del nombre del establecimiento es obligatorio') }
        if (!password) { throw new Error('La contraseña debe ser definida') }
        if (!phone) { throw new Error('El campo del teléfono es obligatorio') }
        if (!email) { throw new Error('El campo del e-mail es obligatorio') }
        if (!city) { throw new Error('El campo de la ciudad es obligatorio') }
        let newPost = await Post.create({
            name,
            password,
            phone,
            email,
            adress,
            cuit,
            imagen,
            enabled,
            city,
            category
        })

        res.send(newPost);

    } catch (e) {
        res.status(500).send(`${e}`)
    }
};

const putPost = async (req, res) => {
    const { id } = req.params;
    const {
        name,
        password,
        phone,
        email,
        adress,
        cuit,
        imagen,
        city,
        category,
        enabled
    } = req.body;
    let postToModify = await Post.findByPk(id)
        try {
        if (!postToModify) { throw new Error('No hay proveedores con ese ID') }
        if (!name) { throw new Error('El campo del nombre del establecimiento es obligatorio') }
        if (!password) { throw new Error('La contraseña debe ser definida') }
        if (!phone) { throw new Error('El campo del teléfono es obligatorio') }
        if (!email) { throw new Error('El campo del e-mail es obligatorio') }
        if (!city) { throw new Error('El campo de la ciudad es obligatorio') }
        let edited = await Post.upsert(
            {
                name,
                password,
                phone,
                email,
                adress,
                cuit,
                imagen,
                city,
                category,
                enabled
            }
        )
        if (store) {
            let storeToAdd = await Store.findAll({
                where: { name: store }
            })
            postToModify.setStore(storeToAdd);
        }
        if (city) {
            let cityToAdd = await City.findAll({
                where: { name: city }
            })
            postToModify.setCity(cityToAdd);
        }
        res.send(edited);
    } catch (e) {
        res.status(500).send(`${e}`)
    }
};

const deletePost = async (req, res) => {

}

module.exports = {
    getPostByCity,
    getPosts,
    postPost,
    putPost,
    deletePost

};
