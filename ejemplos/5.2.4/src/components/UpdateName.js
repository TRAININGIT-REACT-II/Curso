import { useDispatch, useSelector } from "react-redux";
import { getName } from "../selectors/user";
import { updateName } from "../actions/user";

const UpdateName = () => {
  // Obtenemos la función dispatch utilizando su hook
  const dispatch = useDispatch();
  // Obtenemos el nombre con su selector
  const name = useSelector((state) => getName(state));

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    const { value } = e.target;
    // Utilizamos el estado de redux
    dispatch(updateName(value));
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">¿Cuál es tu nombre?</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={onChange}
        placeholder="Angel, Tana, Raquel,..."
      />
    </form>
  );
};

export default UpdateName;
