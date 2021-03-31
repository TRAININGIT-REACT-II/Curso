import { useParams } from "react-router";

/**
 * Una página que te dice hola :)
 */
const Hello = () => {
  const params = useParams();

  return (
    <section>
      <p>
        Hola <b>{params.name}</b>! 😊
      </p>
    </section>
  );
};

export default Hello;
