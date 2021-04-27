import Form from "../components/Form";

/**
 * Pagina principal
 */
const Home = () => (
  <section aria-describedby="desc">
    <p id="desc">
      Capturar las rutas que no existen te permiten indicar a tus usuarios que
      esa ruta es incorrecta o el recurso que buscan ya no existe.
    </p>
    <Form />
  </section>
);

export default Home;
