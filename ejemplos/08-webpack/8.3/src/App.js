import Layout from "../../../../common/components/Layout";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
const Counter = lazy(() => import("./components/Counter"));

const App = () => (
  <Layout title="8.3 Modos">
    <section aria-describedby="desc">
      <p id="desc">
        Los modos de Webpack simplifican la configuración. En general, estos
        modos funcionan muy bien para distintos casos de uso.
      </p>
      <Suspense fallback={<Loader loadingText="Cargando..." />}>
        <Counter />
      </Suspense>
    </section>
  </Layout>
);

export default App;
