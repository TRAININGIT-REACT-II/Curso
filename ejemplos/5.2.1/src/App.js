import Layout from "../../../common/components/Layout";
import "./example";

const App = () => (
  <Layout title="5.2.1 Store">
    <section aria-describedby="desc">
      <p id="desc">
        El store de redux almacena la información actual y permite modificar
        estos a través de las acciones y los reducers.
      </p>
      <p>Abre la consola del navegador para ver los mensajes</p>
    </section>
  </Layout>
);

export default App;
