import Layout from "../../../../common/components/Layout";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
const Counter = lazy(() => import("./components/Counter"));

const App = () => (
  <Layout title="8.5 Optimiza tu aplicación">
    <section aria-describedby="desc">
      <p id="desc">
        Analizar el código fuente final de tu aplicación puede mostrarte
        información muy relevante. En algunos casos, incluimos librerías al
        completo cuando no es necesario.
      </p>
      <Suspense fallback={<Loader loadingText="Cargando..." />}>
        <Counter />
      </Suspense>
    </section>
  </Layout>
);

export default App;
