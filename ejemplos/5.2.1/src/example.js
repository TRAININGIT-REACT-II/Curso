import { createStore } from "redux";

// Definimos el estado inicial
const initialState = { counter: 0 };

// Asignamos initialState como valor por defecto para el estado.
const reducer = (state = initialState) => {
  // Retornamos un nuevo objeto
  return {
    counter: state.counter + 1,
  };
};

// Creamos el store
const store = createStore(reducer);

// Nos suscribimos a los cambios del estado
const unsubscribe = store.subscribe(() => {
  console.log("El estado ha cambiado!", store.getState());
});

// Lanzamos varias acciones con dispatch
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });

// Nos desuscribimos del listener
unsubscribe();
