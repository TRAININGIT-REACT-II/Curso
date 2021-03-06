import { useEffect, useState } from "react";
import random from "../utils/random";
import "./Counter.css";

// List de emojis
const EMOJI_LIST = [
  "😃", "😊", "👻", "👾", "🐱", "🐶"
];

const Counter = () => {
  // Definimos el estado y su valor inicial
  const [counter, setCounter] = useState(1);
  // Definimos una variable de estado para saber si el contador
  // esta funcionando o no
  const [playing, setPlaying] = useState(false);
  // Hacemos lo mismo para los emojis
  const [emoji, setEmoji] = useState(() => random(EMOJI_LIST))

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  // En este caso, para contar vamos a hacer uso de useEffect.
  // Este efecto se ejecuta cuando cambia el valor de "playing"
  useEffect(() => {
    if (playing) {
      setTimeout(
        incrementCounter, 
        1000
      );
    }
  }, [playing, counter]);

  // Definimos la funcion para actualizar el contador
  const start = () => {
    setPlaying(true);
  }

  const pause = () => {
    setPlaying(false);
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
    <button onClick={start}>Empezar</button>
    <button onClick={pause}>Pausar</button>
    <div className="counter_result" aria-label="Valor" aria-live="polite">
      {emoji.repeat(counter)}
    </div>
  </section>
};

export default Counter;