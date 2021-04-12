import Layout from "../../../common/components/Layout";
import "./example";

const App = () => (
  <Layout title="5.2.2 Reducers y acciones">
    <section aria-describedby="desc">
      <p id="desc">
        Los reducers son funciones que obtienen el estado actual, la acción a
        aplicar sobre este y devuelve un nuevo estado.
      </p>
      <p>Abre la consola del navegador para ver los mensajes</p>
    </section>
  </Layout>
);

export default App;
