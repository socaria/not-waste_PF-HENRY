const { Router } = require("express");
const { postCustomer, getCallCustomer } = require("../controllers/customer");
const { getCityInfo } = require("../controllers/city");
const { getSellers, postSeller, putSeller } = require("../controllers/seller");
const { getProducts, postProduct, putProduct, deleteProduct, getProductsBySeller } = require("../controllers/product");
const { getPosts, postPost, putPost, deletePost } = require("../controllers/post");
const { getManagerById, getAllManager, postManager, putManager } = require("../controllers/manager");
const { getOrderById, getAllOrder, postOrder } = require("../controllers/order");
const { getDietas } = require("../controllers/diets");

const router = Router();

//Rutas del Seller
router.get("/seller", getSellers);
router.post("/seller", postSeller);
router.put("/seller/:id", putSeller);

//Rutas del Product
router.get("/product/:sellerId", getProductsBySeller);
router.get("/product", getProducts);
router.post("/product", postProduct);
router.put("/product/:id", putProduct);
router.delete("/product/:id", deleteProduct);

//Rutas del Post
router.get("/post", getPosts);
router.post("/post", postPost);
router.put("/post/:id", putPost);
router.delete("/post/:id", deletePost);

//Aca van las rutas del Customer
router.get("/customer", getCallCustomer);
router.post("/customer", postCustomer);

//Rutas del Manager
router.get("/manager/:id", getManagerById);
router.get("/manager", getAllManager);
router.post("/manager", postManager);
router.put("/manager/:id", putManager);

//Rutas de City
router.get("/city", getCityInfo);

//Rutas de Order
router.get("/order/:id", getOrderById);
router.get("/order", getAllOrder);
router.post("/order", postOrder);

//Ruta de Dietas
router.get("/dietas", getDietas);

module.exports = router;
