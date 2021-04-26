import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import TodosList from "./components/TodosList";
import Layout from "../../../common/components/Layout";
import useApi from "./hooks/useApi";

import "./App.css";

const App = () => {
  // Definimos la llamada para login
  const loginRequest = useApi("/api/login", "", {}, false);

  let token;
  if (loginRequest.data) {
    token = loginRequest.data.token;
  }

  // Hacemos lo mismo para los todos.
  const request = useApi("/api/todos", token);

  // Función para iniciar sesión en la aplicación
  const login = () => {
    loginRequest.updateParams({
      method: "POST",
      body: JSON.stringify({
        // En un caso real, estos datos vienen de
        // un formulario.
        username: "aaa",
        password: "aaa",
      }),
    });
    loginRequest.perform();
  };

  return (
    <Layout title="6.3 Tu propio useApi hook">
      <section aria-describedby="auth-desc">
        <p id="auth-desc">
          Al igual que hicimos con useCounter, vamos a crear nuestro useApi
          hook. Este te servirá cómo base para la práctica final, aunque tendrás
          que realizarle modificaciones.
        </p>
        {!token && <button onClick={login}>Iniciar sesión</button>}
        {request.error && (
          <p>
            Hubo un error: <b>{request.error}</b>
          </p>
        )}
        {request.data && request.data.length > 0 ? (
          <TodosList todos={request.data} />
        ) : (
          <Loader />
        )}
      </section>
    </Layout>
  );
};

export default App;
