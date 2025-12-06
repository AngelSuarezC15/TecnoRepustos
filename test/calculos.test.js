const {
  calcularStockDisponible,
  calcularTotalCompra,
} = require("../src/services/calculos");

describe("Pruebas unitarias de funciones de negocio", () => {
  test("calcularStockDisponible debe retornar el stock correcto", () => {
    const resultado = calcularStockDisponible(50, 12);
    expect(resultado).toBe(38);
  });

  test("calcularStockDisponible con reservas mayores debe retornar negativo", () => {
    const resultado = calcularStockDisponible(10, 15);
    expect(resultado).toBe(-5);
  });

  test("calcularTotalCompra debe calcular adecuadamente el total", () => {
    const resultado = calcularTotalCompra(20, 3);
    expect(resultado).toBe(60);
  });

  test("calcularTotalCompra con cantidad cero debe dar cero", () => {
    const resultado = calcularTotalCompra(100, 0);
    expect(resultado).toBe(0);
  });
});
