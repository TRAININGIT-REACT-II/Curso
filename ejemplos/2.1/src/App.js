import Counter from "./components/Counter";
import HooksCounter from "./components/HooksCounter";
import Layout from "../../../common/components/Layout";

const App = () => (
  <Layout title="2.1 Introducción a los Hooks">
    <section aria-labelledby="counter" aria-describedby="counter-desc">
      <h3 id="counter">Contador</h3>
      <p id="counter-desc">
        Contador definido como una clase. Utiliza el estado interno para gestionar el contador.
      </p>
      <Counter />
    </section>
    <section aria-labelledby="hook-counter" aria-describedby="hook-counter-desc">
      <h3 id="hook-counter">Contador con Hooks</h3>
      <p id="hook-counter-desc">
        Contador que utiliza hooks para gestionar el estado.
      </p>
      <HooksCounter />
    </section>
  </Layout>
);

export default App;