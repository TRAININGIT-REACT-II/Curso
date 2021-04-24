import { useState, useMemo } from "react";
import useCounter from "../hooks/useCounter";
import random, { randomArray } from "../utils/random";
import "./Counter.css";

// List de emojis
const EMOJI_LIST = [
  "😃", "😊", "👻", "👾", "🐱", "🐶", "😇", "🤖"
];

const Counter = () => {
  // Estado del nombre
  const [name, setName] = useState("");
  // Obtenemos una lista aleatoria de emojis
  const randomEmojiList = useMemo(() => randomArray(EMOJI_LIST, 4), []);
  // Hacemos lo mismo para los emojis
  const [emoji, setEmoji] = useState(() => random(randomEmojiList))
  
  // Tu nuevo hook!
  const counter = useCounter();

  // Modifica el nombre
  const updateName = (e) => {
    const { value } = e.target;
    setName(value);
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
    <label htmlFor="name">Nombre del Contador</label>
    <input id="name" onChange={updateName} placeholder="Mi contador" />
    <select onChange={updateEmoji}>
      <option value="none">Selecciona otro Emoji</option>
      {randomEmojiList.map((em, i) => (
        <option key={i} value={em}>{em}</option>
      ))}
    </select>
    <button onClick={counter.start}>Empezar</button>
    <button onClick={counter.pause}>Pausar</button>
    <div className="counter_result" aria-label="Valor" aria-live="polite">
      {name != "" && <h3>{name}</h3>}
      {emoji.repeat(counter.value)}
    </div>
  </section>
};

export default Counter;