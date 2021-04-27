import { useState } from "react";
import expensiveRandom from "../utils/expensiveRandom";
import "./Counter.css";

// List de emojis
const EMOJI_LIST = [
  "😃", "😊", "👻", "👾", "🐱", "🐶"
]

const HooksCounter = () => {
  // Definimos el estado y su valor inicial
  const [counter, setCounter] = useState(1);
  // Hacemos lo mismo para los emojis
  const [emoji, setEmoji] = useState(() => expensiveRandom(EMOJI_LIST))

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

  // Modifica el emoji actual
  const updateEmoji = (e) => {
    const { value } = e.target;
    
    if (value != "none") {
      setEmoji(value);
    }
  }

  // Mostramos el resultado
  return <section className="counter" aria-label="Contador con Hooks">
    <select onChange={updateEmoji}>
      <option value="none">Selecciona otro Emoji</option>
      {EMOJI_LIST.map((em, i) => (
        <option key={i} value={em}>{em}</option>
      ))}
    </select>
    <button onClick={decreaseCounter}>Disminuir</button>
    <button onClick={increaseCounter}>Aumentar</button>
    <div className="counter_result" aria-label="Valor" aria-live="polite">
      {emoji.repeat(counter)}
    </div>
  </section>
};

export default HooksCounter;