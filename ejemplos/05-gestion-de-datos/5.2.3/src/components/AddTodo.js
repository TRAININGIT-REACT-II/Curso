import { useState } from "react";
import { useDispatch } from "react-redux";

// Acciones
import { addTodo } from "../actions/todos";

const AddTodo = () => {
  // Obtenemos la función dispatch utilizando su hook
  const dispatch = useDispatch();
  // Creamos un estado nuevo para almacenar el nuevo TODO
  const [todo, setTodo] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
  };

  const onChange = (e) => {
    const { value } = e.target;
    // Utilizamos el estado de redux
    setTodo(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="add">¿Cuál es tu nombre?</label>
      <input
        id="add"
        type="text"
        value={todo}
        onChange={onChange}
        placeholder="Ir a la compra"
      />
      <button>Agregar un TODO</button>
    </form>
  );
};

export default AddTodo;
