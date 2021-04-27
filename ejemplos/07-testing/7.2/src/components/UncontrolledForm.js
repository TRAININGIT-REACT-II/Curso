import { useRef, useState } from "react";
import { DEFAULT_STATE } from "../constants/form";

import "./Form.css";

/**
 * En este caso, son los propios componentes HTML los que contienen el estado
 */
const ControlledForm = () => {
  // Estado del formulario y valores por defecto
  const [formState, setFormState] = useState(DEFAULT_STATE);

  // Agregamos una referencia a cada elemento
  const nameRef = useRef(null);
  const colorRef = useRef(null);

  // Devolvemos una funcion para modificar una parte del estado!
  const onSubmit = (e) => {
    e.preventDefault();

    // Opcion 1: Obtenemos los valores a través de los ref
    setFormState({
      ...DEFAULT_STATE,
      name: nameRef.current.value,
      color: colorRef.current.value,
    });
  };

  return (
    <div className="row">
      <div className="col-6">
        <form onSubmit={onSubmit}>
          <label htmlFor="uncontrolled-name">Nombre</label>
          <input
            ref={nameRef}
            id="uncontrolled-name"
            type="text"
            defaultValue={formState.name}
          />
          <label htmlFor="uncontrolled-color">Color favorito</label>
          <input
            ref={colorRef}
            id="uncontrolled-color"
            type="color"
            defaultValue={formState.color}
          />
          <button>Mandar preferencias</button>
        </form>
      </div>
      <div className="col-6">
        <dl>
          <dt>Nombre:</dt>
          <dd className="uncontrolled_result_name">{formState.name}</dd>
          <dt>Color:</dt>
          <dd className="uncontrolled_result_color">{formState.color}</dd>
        </dl>
      </div>
    </div>
  );
};

export default ControlledForm;
