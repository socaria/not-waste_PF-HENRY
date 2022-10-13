const { Order } = require("../db");
const { arrayOrder } = require("../public/api.js");

const getApiInfo = async () => {
  let objRes = arrayOrder.map((order) => {
    return {
      id: order.id,
      date: order.date,
      state: order.state,
      review: order.review,
    };
  });
  return objRes;
};

const getDbInfo = async () => {
  return await Order.findAll();
};

const getAllData = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

const getOrderById = async (req, res) => {
  const { id } = req.params;

  try {
    let orderId;
    if (id.length < 6) {
      orderId = arrayOrder.filter((order) => order.id === +id);

      res.status(200).json(orderId);
    } else {
      orderId = await Order.findByPk(id);
      res.status(200).json(orderId);
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllOrder = async (req, res) => {
  const { state } = req.query;
  try {
    let orderList = await getAllData();
    if (state) {
      let searchState = orderList.filter((order) =>
        order.state.toLowerCase().includes(state.toLocaleLowerCase())
      );
      searchState.length
        ? res.status(200).send(searchState)
        : res
            .status(404)
            .send(`No se encontró ninguna orden con el estado: ${state}`);
    } else {
      res.status(200).send(orderList);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = {
  getOrderById,
  getAllOrder,
};
