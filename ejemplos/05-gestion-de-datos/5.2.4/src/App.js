import Layout from "../../../../common/components/Layout";
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
    <Layout title="5.2.4 Middleware">
      <section aria-describedby="desc">
        <p id="desc">
          Los middlewares te permiten interceptar acciones antes de que estas
          lleguen al store. Puedes continuar con el procesamiento, pausar la
          acción, desecharla e incluso lanzar nuevas.
        </p>
        <UpdateName />
        <AddTodo />
        <TodosList />
      </section>
    </Layout>
  </Provider>
);

export default App;
