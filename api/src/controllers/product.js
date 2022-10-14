const { Product, Diet } = require("../db");

// Ruta get va a buscar a todos los proveedores de la base de datos. Si llegasen las propiedades
// name o store cateogry por query se retornarán los proveedores que coincidan con lo solicitado
const getProducts = async (req, res) => {
    const { diet, category } = req.query;
    let products;
    try {
        products = await Product.findAll();
        res.status(200).send(products);
    } catch (e) {
        res.status(404).send(e.message);
    }
};

//TODO asignar sellerId
const postProduct = async (req, res) => {
    let {
        name,
        price,
        realValue,
        description,
        stock,
        imagen,
        diet
    } = req.body

    try {
        if (!name) { throw new Error('Debe definirse un nombre') }
        if (!price) { throw new Error('Debe definirse un precio') }
        if (!realValue) { throw new Error('Debe definirse un valor real') }
        if (!description) { throw new Error('Debe definirse una descripción') }
        if (!stock) { throw new Error('Debe definirse un stock') }
        let newProduct = await Product.create({
            name,
            price,
            realValue,
            description,
            stock,
            imagen
        })
        let dietDb = await Diet.findAll({
            where: {
                name: diet,
            },
        });

        newProduct.addDiets(dietDb);

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
    getProducts,
    postProduct,
    putProduct,
    deleteProduct
};
