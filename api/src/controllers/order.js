const { Order, Post } = require("../db");
const { arrayOrder } = require("../public/arrayOrder.js");

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
}

const getAllData = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

const validateNewOrder = (newOrder) => {
  const { state, review } = newOrder;

  if (!state || !review) throw Error("Faltan parametros necesarios");
  if (typeof state !== "string")
    throw Error("el estado debe ser en formato texto");
  if (review < 1 || review > 5)
    throw Error("rating debe ser un número entre 1 y 5");
  return true;
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

const postOrder = async (req, res) => {
  let {
    date,
    amount,
    state,
    review,
    postId,
  } = req.body
  try {
    if (!amount) { throw new Error('Debe definirse una cantidad') }
    if (!postId) { throw new Error('Debe definirse los productos') }
    let newOrder = await Order.create({
      date,
      amount,
      state,
      review,
      postId
    })
    newOrder.setPost(postId)
    res.send(newOrder);
  } catch (e) {
    res.status(500).send(`${e}`)
  }
};


const deleteOrder = async (req, res) => {
  const { id } = req.params;
  let orderToDelete = await Order.findByPk(id)
  if (!orderToDelete) {
      return res
          .status(404)
          .json({
              error: 'No hay orders con ese ID'
          });
  }
  await Order.destroy({ where: { id: id } })
  res.send(`La order con el id ${id} fue eliminado`);
}



module.exports = {
  getOrderById,
  getAllOrder,
  postOrder,
  deleteOrder
};
