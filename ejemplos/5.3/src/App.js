import { useReducer } from "react";
import Layout from "../../../common/components/Layout";
import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";
import reducer, { initialState } from "./reducers/todos";

// Estilos
import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Layout title="5.3 useReducer">
      <section aria-describedby="desc">
        <p id="desc">
          useReducer es una implementación nativa del patrón flux en React.
        </p>
        <AddTodo dispatch={dispatch} />
        <TodosList state={state} dispatch={dispatch} />
      </section>
    </Layout>
  );
};

export default App;
