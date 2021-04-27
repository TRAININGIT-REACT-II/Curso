// Importamos la función que queremos testar
import { sayHello } from "../";

// Definimos un bloque describe para dar contexto a los tests
describe("#sayHello", () => {
  // Definimos un test para comprobar que devuelve "Hola!"
  it("responde hola! si no se le pasa ningun parametro", () => {
    expect(sayHello()).toBe("Hola!");
  });
});
