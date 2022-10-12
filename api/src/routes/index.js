const { Router } = require("express");
const { 
    getSellerByCity,
    getSellers,
    postSeller,
    putSeller
  
  } = require("../controllers/seller");

const router = Router();
router.get('/seller/:city', getSellerByCity);
router.get('/seller', getSellers);
router.post('/seller', getSellers);
router.put('/seller', getSellers);

module.exports = router;
