const { Manager } = require("../db");
const { arrayRes } = require("../public/api.js");

const getApiInfo = async () => {
  let objRes = arrayRes.map((manager) => {
    return {
      id: manager.id,
      username: manager.username,
      password: manager.password,
    };
  });
  return objRes;
};

const getDbInfo = async () => {
  return await Manager.findAll();
};

const getAllData = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

const getManagerById = async (req, res) => {
  const { id } = req.params;

  try {
    let managerId;
    if (id.length < 6) {
      managerId = arrayRes.filter((manager) => manager.id === +id);

      res.status(200).json(managerId);
    } else {
      managerId = await Manager.findByPk(id);
      res.status(200).json(managerId);
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllManager = async (req, res) => {
  const { username } = req.query;
  try {
    let managerList = await getAllData();
    if (username) {
      let searchName = managerList.filter((manager) =>
        manager.username.toLowerCase().includes(username.toLocaleLowerCase())
      );
      searchName.length
        ? res.status(200).send(searchName)
        : res
            .status(404)
            .send(`No se encontró ningun manager con el usuario: ${username}`);
    } else {
      res.status(200).send(managerList);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = {
  getAllManager,
  getManagerById,
};
