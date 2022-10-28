const { Router } = require("express");
const { postCustomer, getCallCustomer } = require("../controllers/customer");
const { getCityInfo } = require("../controllers/city");
const {
  getSellers,
  postSeller,
  putSeller,
  restoreSeller,
  disableSeller,
} = require("../controllers/seller");
const {
  getProducts,
  postProduct,
  putProduct,
  deleteProduct,
  getProductsById,
  restoreProduct,
  disableProduct,
} = require("../controllers/product");
const {
  getPosts,
  postPost,
  putPost,
  deletePost,
  getPostById,
  restorePost,
  disablePost,
  disablePostForce,
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
  deleteOrder,
  putOrder,
  putOrderReview
} = require("../controllers/order");
const { getDiets } = require("../controllers/diets");
const {
  post_create_preference,
  get_feedback,
} = require("../controllers/mercadopago");

const router = Router();

//Rutas del Seller
router.get("/seller", getSellers);
router.post("/seller", postSeller);
router.put("/seller/:id", putSeller);
router.put("/seller/restore/:id", restoreSeller);
router.put("/seller/disable/:id", disableSeller);

//Rutas del Product
router.get("/product/:id", getProductsById);
router.get("/product", getProducts);
router.post("/product", postProduct);
router.put("/product/:id", putProduct);
router.delete("/product/:id", deleteProduct);
router.put("/product/restore/:id", restoreProduct);
router.put("/product/disable/:id", disableProduct);

//Rutas del Post
router.get("/post/:id", getPostById);
router.get("/post", getPosts);
router.post("/post", postPost);
router.delete("/post/:id", deletePost);
router.put("/post/:id", putPost);
router.put("/post/restore/:id", restorePost);
router.put("/post/disable/:id", disablePost);
router.put("/post/disableForce/:id", disablePostForce);

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
router.delete("/order/:id", deleteOrder);
router.put("/order/:id", putOrder);
router.put("/orderReview/:id", putOrderReview);
//Ruta de Dietas
router.get("/diets", getDiets);

//mercadopago -->
router.post("/create_preference", post_create_preference);
router.post("/feedback", get_feedback);
//<-- mercadopago

module.exports = router;
