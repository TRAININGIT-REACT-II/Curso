import { useState } from "react";
import "./Counter.css";

const HooksCounter = () => {
  // Definimos el estado y su valor inicial
  const [counter, setCounter] = useState(1);

  // Definimos la funcion para actualizar el contador
  const decreaseCounter = () => {
    if (counter != 1) {
      setCounter(counter - 1);
    }
  }

  // Definimos la funcion para actualizar el contador
  const increaseCounter = () => {
    setCounter(counter + 1);
  }

  // Mostramos el resultado
  return <section className="counter" aria-label="Contador con Hooks">
    <button onClick={decreaseCounter}>Disminuir</button>
    <button onClick={increaseCounter}>Aumentar</button>
    <div className="counter_result" aria-label="Valor" aria-live="polite">
      {"X ".repeat(counter)}
    </div>
  </section>
};

export default HooksCounter;