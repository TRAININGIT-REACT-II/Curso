import { getTodos } from "../selectors/todos";
import { completeTodo } from "../actions/todos";

import "./TodosList.css";

const TodosList = ({ state, dispatch }) => {
  // Obtenemos la información mediante el uso de selectores
  const todos = getTodos(state);

  const toggleComplete = (i) => {
    dispatch(completeTodo(i));
  };

  return (
    <section className="todoslist">
      <h3>Lista de TODOs</h3>
      <ul className="todoslist_list">
        {todos.map((todo, i) => (
          <li
            className={`todoslist_item ${todo.complete ? "completed" : ""}`}
            key={i}
          >
            <label htmlFor={`todoslist_check-${i}`}>
              <input
                id={`todoslist_check-${i}`}
                type="checkbox"
                disabled={todo.complete}
                onChange={() => toggleComplete(i)}
              />
              {todo.todo}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodosList;
