import Layout from "../../../common/components/Layout";
import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";
import UpdateName from "./components/UpdateName";
import { Provider } from "react-redux";

// Store
import store from "./store";

// Estilos
import "./App.css";

const App = () => (
  <Provider store={store}>
    <Layout title="5.2.3 React y Redux">
      <section aria-describedby="desc">
        <p id="desc">
          React puede combinarse con Redux gracias a los nuevos hooks.
        </p>
        <UpdateName />
        <AddTodo />
        <TodosList />
      </section>
    </Layout>
  </Provider>
);

export default App;
