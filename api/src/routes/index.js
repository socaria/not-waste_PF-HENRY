const { Router } = require("express");
const { postCustomer, getCallCustomer } = require("../controllers/customer");
const {
  getSellerByCity,
  getSellers,
  postSeller,
  putSeller,
} = require("../controllers/seller");

const router = Router();
router.get("/seller/:city", getSellerByCity);
router.get("/seller", getSellers);
router.post("/seller", postSeller);
router.put("/seller", putSeller);

//Aca van las rutas del Customers

router.get("/customer", getCallCustomer);
router.post("/customer", postCustomer);

module.exports = router;
