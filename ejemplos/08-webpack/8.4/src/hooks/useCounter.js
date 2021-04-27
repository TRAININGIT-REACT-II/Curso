import { useState, useRef, useEffect, useCallback } from "react";

/**
 * Tu primer hook! Este hook contiene toda la funcionalidad
 * para gestionar un contador. Y lo puedes reutilizar en otros
 * componentes si lo necesitas!
 */
const useCounter = (initialValue = 1) => {
  // Definimos el estado y su valor inicial
  const [counter, setCounter] = useState(initialValue);
  // Definimos una variable de estado para saber si el contador
  // esta funcionando o no
  const [playing, setPlaying] = useState(false);
  // Almacena el valor actual del timeout
  const timeoutRef = useRef(null);

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  // En este caso, para contar vamos a hacer uso de useEffect.
  // Este efecto se ejecuta cuando cambia el valor de "playing"
  useEffect(() => {
    if (playing) {
      timeoutRef.current = setTimeout(
        incrementCounter, 
        1000
      );
    }

    return () => clearTimeout(timeoutRef.current);
  }, [playing, counter]);

  // Funciones de ayuda para comenzar y pausar el contador
  const start = useCallback(() => {
    setPlaying(true);
  }, [setPlaying]);
  const pause = useCallback(() => {
    setPlaying(false);
  }, [setPlaying]);

  return {
    value: counter,
    isPlaying: playing,
    start,
    pause
  }
}

export default useCounter;