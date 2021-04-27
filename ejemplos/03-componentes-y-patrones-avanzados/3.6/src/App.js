import Layout from "../../../../common/components/Layout";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
const Counter = lazy(() => import("./components/Counter"));

const App = () => (
  <Layout title="3.6 Suspense y Lazy loading">
    <section aria-describedby="desc">
      <p id="desc">
        Suspense y Lazy loading te permiten cargar elementos en segundo plano
        mientras tus usuarios pueden empezar a interaccionar con la interfaz.
      </p>
      <Suspense fallback={<Loader loadingText="Cargando..." />}>
        <Counter />
      </Suspense>
    </section>
  </Layout>
);

export default App;
