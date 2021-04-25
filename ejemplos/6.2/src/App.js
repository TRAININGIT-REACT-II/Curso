import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import TodosList from "./components/TodosList";
import Layout from "../../../common/components/Layout";

import "./App.css";
import AddTodo from "./components/AddTodo";

const App = () => {
  // Definimos un estado para la lista de tareas
  const [todos, setTodos] = useState([]);
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  // Función para obtener la lista de tareas
  const fetchTodos = () => {
    fetch("/api/todos", {
      // Pasamos el token en el header
      headers: {
        "api-token": token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.error != null) {
          setError(json.error);
        } else {
          setTodos(json);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTodos();
  }, [token]); // Reaccionamos ante cambios en el token

  // Función para iniciar sesión en la aplicación
  const login = () => {
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        // En un caso real, estos datos vienen de
        // un formulario.
        username: "aaa",
        password: "aaa",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.error != null) {
          // Si hay un error lo mostramos
          setError(json.error);
        } else {
          // Almacenamos el token y limpiamos el error
          setToken(json.token);
          setError("");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout title="6.2 Autenticación y Autorización">
      <section aria-describedby="auth-desc">
        <p id="auth-desc">
          Autenticación y Autorización son dos términos muy relevantes a la hora
          de integrar una aplicación con una API. En este apartado vamos a ver
          un ejemplo.
        </p>
        {token.length === 0 && <button onClick={login}>Iniciar sesión</button>}
        {error.length > 0 && (
          <p>
            Hubo un error: <b>{error}</b>
          </p>
        )}
        {todos.length === 0 ? <Loader /> : <TodosList todos={todos} />}
      </section>
    </Layout>
  );
};

export default App;
