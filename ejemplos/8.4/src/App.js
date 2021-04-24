import Layout from "../../../common/components/Layout";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
const Counter = lazy(() => import("./components/Counter"));

const App = () => (
  <Layout title="8.4 Plugins">
    <section aria-describedby="desc">
      <p id="desc">
        Los plugins agregan distintas funcionalidades al proceso de compilación
        de Webpack. Algunos plugins son muy utilizados como{" "}
        <a
          href="https://webpack.js.org/plugins/copy-webpack-plugin/"
          rel="noopener noreferrer"
          target="_blank"
        >
          CopyWebpackPlugin
        </a>{" "}
        y{" "}
        <a
          href="https://webpack.js.org/plugins/define-plugin/"
          rel="noopener noreferrer"
          target="_blank"
        >
          DefinePlugin
        </a>
        .
      </p>
      <p>
        Por ejemplo, esta cadena de texto se pasa como parámetro desde la
        configuración de Webpack: <b>{EXTERNAL_SERVICE_TOKEN}</b>
      </p>
      <Suspense fallback={<Loader loadingText="Cargando..." />}>
        <Counter />
      </Suspense>
    </section>
  </Layout>
);

export default App;
