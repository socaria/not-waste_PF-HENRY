const { Router } = require("express");
const { Product } = require("../db");

const getProductByCity = async (req, res) => {
    // const { city } = req.params;
    // let products = await Product.findAll({ where: { city: city } });
    // //   console.log(products);
    // if (products.length) {
    //     res.status(200).send(products);
    // } else {
    //     res.status(404).json("No se encontraron proveedores en esa ciudad");
    // }
};

// Ruta get va a buscar a todos los proveedores de la base de datos. Si llegasen las propiedades
// name o store cateogry por query se retornarán los proveedores que coincidan con lo solicitado
const getProducts = async (req, res) => {
    const { name, category, city } = req.query;
    let products;
    try {
        products = await Product.findAll();
        if (name) {
            products = products.filter(s => {
                s.name === name
            });
            if (!products.length) {
                throw new Error('No hay proveedores con ese nombre')
            };
        }
        if (category) {
            products = products.filter(s => s.category === category)
            if (!products.length) {
                throw new Error('No hay proveedores con esa categoría de establecimiento')
            };
        }
        res.status(200).send(products);
    } catch (e) {
        res.status(404).send(e.message);
    }
};

const postProduct = async (req, res) => {
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
        let newProduct = await Product.create({
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

        res.send(newProduct);

    } catch (e) {
        res.status(500).send(`${e}`)
    }
};

const putProduct = async (req, res) => {
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
    let productToModify = await Product.findByPk(id)
        try {
        if (!productToModify) { throw new Error('No hay proveedores con ese ID') }
        if (!name) { throw new Error('El campo del nombre del establecimiento es obligatorio') }
        if (!password) { throw new Error('La contraseña debe ser definida') }
        if (!phone) { throw new Error('El campo del teléfono es obligatorio') }
        if (!email) { throw new Error('El campo del e-mail es obligatorio') }
        if (!city) { throw new Error('El campo de la ciudad es obligatorio') }
        let edited = await Product.upsert(
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
            productToModify.setStore(storeToAdd);
        }
        if (city) {
            let cityToAdd = await City.findAll({
                where: { name: city }
            })
            productToModify.setCity(cityToAdd);
        }
        res.send(edited);
    } catch (e) {
        res.status(500).send(`${e}`)
    }
};

const deleteProduct = async (req, res) => {

}

module.exports = {
    getProductByCity,
    getProducts,
    postProduct,
    putProduct,
    deleteProduct

};
