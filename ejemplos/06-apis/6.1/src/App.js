import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import TodosList from "./components/TodosList";
import Layout from "../../../../common/components/Layout";

import "./App.css";
import AddTodo from "./components/AddTodo";

const App = () => {
  // Definimos un estado para la lista de tareas
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setTodos(json))
      .catch((err) => console.error(err));
  };

  const submitTodo = (todo) => {
    // Agregamos un nuevo elemento
    fetch("https://jsonplaceholder.typicode.com/todos", {
      // Cambiamos el método a POST
      method: "POST",
      // Obtenemos el cuerpo del mensaje. Hacemos uso de JSON.stringify
      // Para obtener una cadena a partir del objeto
      body: JSON.stringify({
        title: todo,
        completed: false,
        userId: 1,
      }),
      // Modificamos la cabecera
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Obtenemos la respuesta
      .then((res) => res.json())
      .then((json) => setTodos([json].concat(todos)))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Layout title="6.1 Fetch">
      <section aria-describedby="fetch-desc">
        <p id="fetch-desc">
          Fetch es una librería nativa del navegador para realizar peticiones a
          un servidor. En este caso, vamos a utilizar JSONPlaceholder para
          obtener y crear una lista de tareas.
        </p>
        <AddTodo submitTodo={submitTodo} />
        {todos.length === 0 ? <Loader /> : <TodosList todos={todos} />}
      </section>
    </Layout>
  );
};

export default App;
