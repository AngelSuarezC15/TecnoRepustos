const repo = require("../repositories/productos.repository");

function crearProducto(req, res) {
  const { nombre, precio } = req.body;

  if (!nombre || !precio) {
    return res.status(400).json({ mensaje: "Datos incompletos" });
  }

  const nuevo = repo.crearProducto({ nombre, precio });
  return res.status(201).json(nuevo);
}

module.exports = {
  crearProducto,
};
