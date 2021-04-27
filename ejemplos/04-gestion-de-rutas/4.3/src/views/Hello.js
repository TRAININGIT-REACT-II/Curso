import { useHistory, useLocation, useParams } from "react-router";

/**
 * Una página que te dice hola :)
 */
const Hello = () => {
  const params = useParams();
  const history = useHistory();
  const { state } = useLocation();

  // Método para volver atrás
  const back = () => {
    history.goBack();
  };

  return (
    <section>
      <p>
        Hola <b>{params.name}</b>! 😊
      </p>
      <p>Tu mensaje es:</p>
      <pre>
        <code>{state.msg}</code>
      </pre>
      <button onClick={back}>Atrás</button>
    </section>
  );
};

export default Hello;
