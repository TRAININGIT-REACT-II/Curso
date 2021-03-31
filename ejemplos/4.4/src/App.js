import Layout from "../../../common/components/Layout";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import User from "./contexts/user";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

// Vistas
import Home from "./views/Home";
import Admin from "./views/Admin";
import Login from "./views/Login";

const App = () => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <User.Provider value={{ signedIn, updateUser: setSignedIn }}>
      <Router>
        <Layout title="4.4 Rutas privadas">
          <nav className="secondary">
            <NavLink exact activeClassName="active" to="/">
              Inicio
            </NavLink>{" "}
            {!signedIn && (
              <NavLink activeClassName="active" to="/login">
                Iniciar sesión
              </NavLink>
            )}{" "}
            {signedIn && (
              <NavLink activeClassName="active" to="/private">
                Panel de administración
              </NavLink>
            )}
          </nav>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/private">
            <Admin />
          </PrivateRoute>
        </Layout>
      </Router>
    </User.Provider>
  );
};

export default App;
