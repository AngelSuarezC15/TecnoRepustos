const request = require("supertest");
const app = require("../src/app");

describe("Prueba de integración - Creación de producto", () => {
  test("Debe crear un producto correctamente", async () => {
    const response = await request(app)
      .post("/api/productos")
      .send({ nombre: "Teclado Mecánico", precio: 45.99 });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.nombre).toBe("Teclado Mecánico");
    expect(response.body.precio).toBe(45.99);
  });

  test("Debe devolver error 400 si faltan datos", async () => {
    const response = await request(app)
      .post("/api/productos")
      .send({ nombre: "Mouse" });

    expect(response.statusCode).toBe(400);
    expect(response.body.mensaje).toBe("Datos incompletos");
  });
});
