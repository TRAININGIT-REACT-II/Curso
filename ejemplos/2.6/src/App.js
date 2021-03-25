import { useRef, useEffect } from "react";
import Counter from "./components/Counter";
import Layout from "../../../common/components/Layout";

const App = () => (
  <Layout title="2.6 useCallback y useMemo">
    <section aria-labelledby="counter" aria-describedby="counter-desc">
      <h3 id="counter">Contador</h3>
      <p id="counter-desc">
        Ahora los emojis serán aleatorios.
      </p>
      <Counter />
    </section>
  </Layout>
);

export default App;