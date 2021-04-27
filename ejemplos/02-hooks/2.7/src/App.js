import { useRef, useEffect } from "react";
import Counter from "./components/Counter";
import Layout from "../../../../common/components/Layout";

const App = () => (
  <Layout title="2.7 Tu primer hook">
    <section aria-labelledby="counter" aria-describedby="counter-desc">
      <h3 id="counter">Contador</h3>
      <p id="counter-desc">
        Ahora toca crear tu primer hook. Verás lo simple que queda el código
        después de dividirlo.
      </p>
      <Counter />
    </section>
  </Layout>
);

export default App;
