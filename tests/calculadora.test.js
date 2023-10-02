const calculadora = require("../model/calculadora");

test("somar 5 + 100 deveria retornar 105 ", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});
