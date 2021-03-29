import { useState } from "react"
import { DEFAULT_STATE } from "../constants/form";

import "./Form.css";

/**
 * Este formulario usa el estado de React para almacenar los valores actuales
 */
const ControlledForm = () => {
  // Estado del formulario y valores por defecto
  const [formState, setFormState] = useState(DEFAULT_STATE);

  // Devolvemos una funcion para modificar una parte del estado!
  const onChange = (key) => {
    return (e) => setFormState({
      ...formState,
      [key]: e.target.value
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return <div className="row">
    <div className="col-6">
      <form onSubmit={onSubmit}>
        <label htmlFor="controlled-name">Nombre</label>
        <input id="controlled-name" type="text" value={formState.name} onChange={onChange("name")} />
        <label htmlFor="controlled-color">Color favorito</label>
        <input id="controlled-color" type="color" value={formState.color} onChange={onChange("color")} />
        <button>Mandar preferencias</button>
      </form>
    </div>
    <div className="col-6">
      <pre>
        <code>
          {JSON.stringify(formState, null, 2)}
        </code>
      </pre>
    </div>
  </div>
}

export default ControlledForm;