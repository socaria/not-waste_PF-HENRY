const mercadopago = require("mercadopago");
const {ACCESS_TOKEN_MP_CRISTIAN} = process.env

mercadopago.configure({
  access_token: ACCESS_TOKEN_MP_CRISTIAN
})
  

const post_create_preference = async (req, res) => {
  
      let preference = {
          items: [
              {
                  title: req.body.title,
                  unit_price: Number(req.body.price),
                  quantity: Number(req.body.quantity)
              }
          ],
          back_urls: { //esto es donde redirecciona en cada caso
              "success": "http://localhost:3001/feedback",
              "failure": "http://localhost:3001/feedback",
              "pending": "http://localhost:3001/feedback"
          },
          auto_return: "approved",
      };
      console.log(preference)
      mercadopago.preferences.create(preference)
          .then(function (response) {
              res.json({
                  id: response.body
              });
          })
          .catch(function (error) {
              console.log(error);
          });
  };
  
  const get_feedback = async (req, res) => {  //mercadopago me redirecciona aca con los datos por query
      // res.json({
      // 	Payment: req.query.payment_id,
      // 	Status: req.query.status,
      // 	MerchantOrder: req.query.merchant_order_id
      // });
      res.json(req.query)
  };

  module.exports = {
    post_create_preference,
    get_feedback
  }