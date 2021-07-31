var Room = require("../models/room.model");
exports.findAll = async function (req, res) {
  try {
    const rooms = await Room.find({});
    res.send({
      rooms,
    });
  } catch (error) {
    return res.status(400).send({ error: " Algo deu errado na aplicação" });
  }
};

exports.create = async function (req, res) {
  const { title, description } = req.body;

  try {
    const room = await new Room({
      title: title,
      description: description,
    }).save();
    res.status(200).send({ message: "Sala criada com sucessso" });
  } catch (error) {
    return res.status(400).send({ error: " Algo deu errado na aplicação" });
  }
};
