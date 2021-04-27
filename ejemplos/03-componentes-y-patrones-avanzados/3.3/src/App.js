import { useState } from "react";
import Counter from "./components/Counter";
import Layout from "../../../../common/components/Layout";

const App = () => {
  const [loading, setLoading] = useState(true);

  const stopLoading = () => setLoading(false);

  return (
    <Layout title="3.3 High Order Components">
      <section aria-describedby="hoc-desc">
        <p id="hoc-desc">
          Los componentes de alto nivel o <i>High Order Components</i> son
          funciones que devuelven nuevos componentes. Esto te permite agregar
          código, distintas funcionalidades e incluso gestionar un estado.
        </p>
        <button onClick={stopLoading}>Parar la carga</button>
        <Counter loading={loading} />
      </section>
    </Layout>
  );
};

export default App;
