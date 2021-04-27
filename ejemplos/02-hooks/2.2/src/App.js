import Counter from "./components/Counter";
import Layout from "../../../../common/components/Layout";

const App = () => (
  <Layout title="2.2 useState">
    <section aria-labelledby="counter" aria-describedby="counter-desc">
      <h3 id="counter">Contador</h3>
      <p id="counter-desc">
        Ahora el contador dispone de un selector para cambiar el tipo de emoji a
        mostrar. Además, el emoji por defecto es aleatorio. El cálculo de este
        es bastante más complejo de lo que debería ser a propósito.
      </p>
      <Counter />
    </section>
  </Layout>
);

export default App;
