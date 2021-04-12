import { getName } from "../selectors/user";
import { getTodos } from "../selectors/todos";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo } from "../actions/todos";

import "./TodosList.css";

const TodosList = () => {
  // Obtenemos la información mediante el uso de selectores
  const name = useSelector((state) => getName(state));
  const todos = useSelector((state) => getTodos(state));

  // Obtenemos la función dispatch
  const dispatch = useDispatch();

  const toggleComplete = (i) => {
    dispatch(completeTodo(i));
  };

  return (
    <section className="todoslist">
      <h3>Lista de {name != null && name !== "" ? name : "TODOs"}</h3>
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
