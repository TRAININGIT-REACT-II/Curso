import Counter from "./components/Counter";
import Layout from "../../../common/components/Layout";

const App = () => (
  <Layout title="2.3 useEffect">
    <section aria-labelledby="counter" aria-describedby="counter-desc">
      <h3 id="counter">Contador</h3>
      <p id="counter-desc">
        En este apartado vamos a cambiar la implementación del contador. En lugar de aumentar
        y disminuir manualmente, vamos a poner una función de empezar y parar.
      </p>
      <Counter />
    </section>
  </Layout>
);

export default App;