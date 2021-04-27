import { useContext } from "react";
import { useLocation } from "react-router";
import User from "../contexts/user";

import "./Login.css";

const Login = () => {
  // Obtenemos el mensaje del a ruta si lo hubiera
  const { state } = useLocation();
  // Obtenemos el contexto del usuario
  const user = useContext(User);
  // Comprobamos si hay que mostrar el mensaje
  const displayAlert = state && state.msg != null && !user.signedIn;

  // Actualizamos el valor del usuario
  const onLogin = () => {
    user.updateUser(true);
  };

  return (
    <section aria-labelledby="login-title">
      <h2>Iniciar sesión</h2>
      {displayAlert && (
        <div className="login-alert" role="alert">
          {state.msg}
        </div>
      )}
      {user.signedIn ? (
        <p>Ya puedes acceder la panel de administración 👆</p>
      ) : (
        <>
          <p>Haz click en el botón para iniciar sesión para iniciar sesión</p>
          <button onClick={onLogin}>Iniciar sesión</button>
        </>
      )}
    </section>
  );
};

export default Login;
