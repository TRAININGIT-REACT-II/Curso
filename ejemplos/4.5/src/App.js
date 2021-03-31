import Layout from "../../../common/components/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Vistas
import Home from "./views/Home";
import Hello from "./views/Hello";
import NotFound from "./views/NotFound";

const App = () => (
  <Router>
    <Layout title="4.5 404">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/hello/:name([a-zA-Z]*)">
          <Hello />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  </Router>
);

export default App;
