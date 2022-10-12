const { Router } = require("express");
const { getSellerByCity } = require("../controllers/seller");

const router = Router();
router.get("/hola/:city", getSellerByCity);

module.exports = router;
