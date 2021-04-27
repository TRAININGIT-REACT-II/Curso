import { useEffect, useState, useRef, useMemo } from "react";
import random, { randomArray } from "../utils/random";
import "./Counter.css";
import withLoader from "./WithLoader";

// List de emojis
const EMOJI_LIST = ["😃", "😊", "👻", "👾", "🐱", "🐶", "😇", "🤖"];

const Counter = () => {
  // Definimos el estado y su valor inicial
  const [counter, setCounter] = useState(1);
  // Estado del nombre
  const [name, setName] = useState("");
  // Definimos una variable de estado para saber si el contador
  // esta funcionando o no
  const [playing, setPlaying] = useState(false);
  // Obtenemos una lista aleatoria de emojis
  const randomEmojiList = useMemo(() => randomArray(EMOJI_LIST, 4), []);
  // Hacemos lo mismo para los emojis
  const [emoji, setEmoji] = useState(() => random(randomEmojiList));

  // Almacena el valor actual del timeout
  const timeoutRef = useRef(null);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // En este caso, para contar vamos a hacer uso de useEffect.
  // Este efecto se ejecuta cuando cambia el valor de "playing"
  useEffect(() => {
    if (playing) {
      timeoutRef.current = setTimeout(incrementCounter, 1000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [playing, counter]);

  // Definimos la funcion para actualizar el contador
  const start = () => {
    setPlaying(true);
  };

  const pause = () => {
    setPlaying(false);
  };

  // Modifica el nombre
  const updateName = (e) => {
    const { value } = e.target;
    setName(value);
  };

  // Modifica el emoji actual
  const updateEmoji = (e) => {
    const { value } = e.target;

    if (value != "none") {
      setEmoji(value);
    }
  };

  // Mostramos el resultado
  return (
    <section className="counter" aria-label="Contador con Hooks">
      <label htmlFor="name">Nombre del Contador</label>
      <input id="name" onChange={updateName} placeholder="Mi contador" />
      <select onChange={updateEmoji}>
        <option value="none">Selecciona otro Emoji</option>
        {randomEmojiList.map((em, i) => (
          <option key={i} value={em}>
            {em}
          </option>
        ))}
      </select>
      <button onClick={start}>Empezar</button>
      <button onClick={pause}>Pausar</button>
      <div className="counter_result" aria-label="Valor" aria-live="polite">
        {name != "" && <h3>{name}</h3>}
        {emoji.repeat(counter)}
      </div>
    </section>
  );
};

export default withLoader(Counter);
