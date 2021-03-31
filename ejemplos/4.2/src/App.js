import Layout from "../../../common/components/Layout";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";

// Vistas
import Home from "./views/Home";
import Hello from "./views/Hello";

const App = () => (
  <Router>
    <Layout title="4.2 Parámetros en rutas">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/hello/:name([a-zA-Z]*)">
        <Hello />
      </Route>
    </Layout>
  </Router>
);

export default App;
