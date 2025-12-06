let productos = [];

function crearProducto(producto) {
  producto.id = productos.length + 1;
  productos.push(producto);
  return producto;
}

module.exports = {
  crearProducto,
  _data: productos,
};
