const { Seller, City } = require("../db");

const getSellerByCity = async (req, res) => {
    const { city } = req.params;
    //TODO ver que busque sin diferencia mayusculas
    let sellers = await Seller.findAll({ where: { city: city } });
    if (sellers.length) {
        res.status(200).send(sellers);
    } else {
        res.status(404).json("No se encontraron proveedores en esa ciudad");
    }
};

// Ruta get va a buscar a todos los proveedores de la base de datos. Si llegasen las propiedades
const getSellers = async (req, res) => {
    const { name, category } = req.query;
    let sellers;
    try {
        sellers = await Seller.findAll({
            include: {
                model: City,
                attributes: ["name"],
                through: {
                    attributes: [],
                },
            },
        });
        if (name) {
            sellers = sellers.filter(s => {
                s.name === name
            });
            if (!sellers.length) {
                throw new Error('No hay proveedores con ese nombre')
            };
        }
        if (category) {
            sellers = sellers.filter(s => s.category === category)
            if (!sellers.length) {
                throw new Error('No hay proveedores con esa categoría de establecimiento')
            };
        }
        res.status(200).send(sellers);
    } catch (e) {
        res.status(404).send(e.message);
    }
};

const postSeller = async (req, res) => {
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
        let newSeller = await Seller.create({
            name,
            password,
            phone,
            email,
            adress,
            cuit,
            imagen,
            enabled,
            category
        })
        let cityDb = await City.findAll({
            where: {
                name: city,
            },
        });

        newSeller.addCity(cityDb);

        res.send(newSeller);

    } catch (e) {
        res.status(500).send(`${e}`)
    }
};

const putSeller = async (req, res) => {
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
    let sellerToModify = await Seller.findByPk(id);
    try {
        if (!sellerToModify) { throw new Error('No hay proveedores con ese ID') }
        if (!name) { throw new Error('El campo del nombre del establecimiento es obligatorio') }
        if (!password) { throw new Error('La contraseña debe ser definida') }
        if (!phone) { throw new Error('El campo del teléfono es obligatorio') }
        if (!email) { throw new Error('El campo del e-mail es obligatorio') }
        if (!city) { throw new Error('El campo de la ciudad es obligatorio') }
        let edited = await Seller.upsert(
            {
                id,
                name,
                password,
                phone,
                email,
                adress,
                cuit,
                imagen,
                category,
                enabled
            }
        )
        let cityDb = await City.findAll({
            where: { name: city }
        })

        edited[0].setCities(cityDb);
        res.send(edited);
    } catch (e) {
        res.status(500).send(`${e}`)
    }
};

module.exports = {
    getSellerByCity,
    getSellers,
    postSeller,
    putSeller,

};
