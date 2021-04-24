import Layout from "../../../common/components/Layout";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
const Counter = lazy(() => import("./components/Counter"));

const App = () => (
  <Layout title="8.2 Configuracion básica de Webpack">
    <section aria-describedby="desc">
      <p id="desc">
        El fichero de configuración de Webpack define y gestiona todo el proceso
        de compilación de tu aplicación. Podrás agregar distintas
        funcionalidades dependiendo de las necesidades de tu aplicación.
      </p>
      <Suspense fallback={<Loader loadingText="Cargando..." />}>
        <Counter />
      </Suspense>
    </section>
  </Layout>
);

export default App;
