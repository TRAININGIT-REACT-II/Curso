import "./TodosList.css";

const TodosList = ({ todos }) => {
  return (
    <section className="todoslist">
      <h3>Lista de Tareas</h3>
      <ul className="todoslist_list">
        {todos.map((todo, i) => (
          <li
            className={`todoslist_item ${todo.completed ? "completed" : ""}`}
            key={i}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodosList;
