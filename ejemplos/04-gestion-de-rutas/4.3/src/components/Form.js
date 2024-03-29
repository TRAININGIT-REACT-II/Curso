import { useState } from "react";
import { useHistory } from "react-router";

const Form = () => {
  // Alamcenamos el estado del formulario
  const [formState, setFormState] = useState({ name: "", msg: "" });
  // Obtenemos la API de react-router para modificar las rutas
  const history = useHistory();

  // Actualizamos el estado
  const onChange = (key) => (e) => {
    setFormState({
      ...formState,
      [key]: e.target.value,
    });
  };

  // Modificamos la URL cuando se envía el formulario
  const onSubmit = (e) => {
    e.preventDefault();

    // El método push agregar una nueva URL al histórico
    history.push(`/hello/${formState.name}`, { msg: formState.msg });
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Introduce tu nombre</label>
      <input
        id="name"
        type="text"
        value={formState.name}
        onChange={onChange("name")}
        placeholder="Angel"
      />
      <label htmlFor="msg">Mensaje</label>
      <input
        id="msg"
        type="text"
        value={formState.msg}
        onChange={onChange("msg")}
        placeholder="Un mensaje"
      />
      <button>Dime hola!</button>
    </form>
  );
};

export default Form;
