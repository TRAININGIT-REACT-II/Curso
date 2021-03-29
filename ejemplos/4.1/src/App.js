import Layout from "../../../common/components/Layout";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";

// Vistas
import Home from "./views/Home";
import About from "./views/About";

const App = () => (
  <Router>
    <Layout title="4.1 React-Router">
      <nav className="secondary">
        <NavLink exact activeClassName="active" to="/">Inicio</NavLink>
        {' '}
        <NavLink activeClassName="active" to="/about">Sobre el curso</NavLink>
      </nav>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Layout>
  </Router>
);

export default App;