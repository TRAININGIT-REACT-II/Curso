import { Component } from "react";

/**
 * Componente de clase que define un contador.
 */
class Counter extends Component {
  
  constructor() {
    super();

    // Definimos el valor inicial
    this.state = {
      counter: 0
    };

    // Proporcionamos el context correcto a la funcion counter.
    // No es necesario en este caso, ya que la funcion se ejecuta
    // en el mismo contexto, pero una buena practica en cualquier
    // caso.
    this.increaseCounter = this.increaseCounter.bind(this);
  }

  // Funcion para aumentar el contador
  increaseCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  // Mostramos el resultado
  render() {
    return <section aria-label="Contador">
      <button onClick={this.increaseCounter}>Incrementar</button>{" "}
      <span>{this.state.counter}</span>
    </section>
  }
}

export default Counter;