const { Router } = require("express");
const { getSellerByCity } = require("../controllers/seller");
const { getCallCustomer } = require("../controllers/customer");

const router = Router();
router.get("/hola/:city", getSellerByCity);

//Aca van las rutas del Customers

router.get("/customer", getCallCustomer);

module.exports = router;
