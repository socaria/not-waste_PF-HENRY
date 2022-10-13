const { Router } = require("express");
const { postCustomer, getCallCustomer } = require("../controllers/customer");
const { getCityInfo } = require("../controllers/city");
const {
  getSellers,
  postSeller,
  putSeller,
} = require("../controllers/seller");
const {
  getProducts,
  postProduct,
  putProduct,
  deleteProduct,
} = require("../controllers/product");
const {
  getPosts,
  postPost,
  putPost,
  deletePost,
} = require("../controllers/post");
const {
  getManagerById,
  getAllManager,
  postManager,
  putManager,
} = require("../controllers/manager");
const {
  getOrderById,
  getAllOrder,
  postOrder,
} = require("../controllers/order");



const router = Router();

//Rutas del seller
router.get("/seller", getSellers);
router.post("/seller", postSeller);
router.put("/seller/:id", putSeller);

//Rutas del Product
router.get("/product", getProducts);
router.post("/product", postProduct);
router.put("/product/:id", putProduct);
router.delete("/product/:id", deleteProduct);

//Rutas del Post
router.get("/post", getPosts);
router.post("/post", postPost);
router.put("/post/:id", putPost);
router.delete("/post/:id", deletePost);

//Aca van las rutas del Customers

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

module.exports = router;
