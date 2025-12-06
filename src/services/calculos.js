function calcularStockDisponible(stockActual, unidadesReservadas) {
  return stockActual - unidadesReservadas;
}

function calcularTotalCompra(precioUnitario, cantidad) {
  return precioUnitario * cantidad;
}

module.exports = {
  calcularStockDisponible,
  calcularTotalCompra,
};
