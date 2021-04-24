// Función para decir hola a una persona. Si el nombre está vacío.
// devuelve solo "Hola!".
export const sayHello = (name = "") =>
  name != null && name.length > 0 ? `Hola ${name}!` : "Hola!";
