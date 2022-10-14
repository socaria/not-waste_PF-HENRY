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
        diets
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
                name: diets,
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
    let {
        name,
        price,
        realValue,
        description,
        stock,
        imagen,
        diets
    } = req.body
    let productToModify = await Product.findByPk(id)
    try {
        if (!name) { throw new Error('Debe definirse un nombre') }
        if (!price) { throw new Error('Debe definirse un precio') }
        if (!realValue) { throw new Error('Debe definirse un valor real') }
        if (!description) { throw new Error('Debe definirse una descripción') }
        if (!stock) { throw new Error('Debe definirse un stock') }
        let productToModify = await Product.upsert(
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

        productToModify[0].setDiets(dietDb);

        res.send(productToModify);
    } catch (e) {
        res.status(500).send(`${e}`)
    }
};

const deleteProduct = async (req, res) => {
        const { id } = req.params;
        let productToDelete = await Product.findByPk(id)
        if (!productToDelete) {
            return res
                .status(404)
                .json({
                    error: 'There is not products with this ID'
                });
        }    
        await Product.destroy({ where: { id: id } })
        res.send('done');    
}

module.exports = {
    getProducts,
    postProduct,
    putProduct,
    deleteProduct
};
