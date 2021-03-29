import { useState } from "react";
import Layout from "../../../common/components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
import Title from "./components/Title";

const App = () => {
  const [holaProps, setHolaProps] = useState({});
  const [adiosProps, setAdiosProps] = useState({}); 

  const updateHolaError = () => {
    setHolaProps({ sendError: true });
  }

  const updateAdiosError = () => {
    setAdiosProps({ sendError: true });
  }

  const onReset = () => {
    setHolaProps({});
    setAdiosProps({});
  }

  return <Layout title="3.1 Fragments">
    <section aria-labelledby="title" aria-describedby="desc">
      <h3 id="title">Error Boundaries</h3>
      <p id="desc">
        Un <code>Error Boundary</code> es un componente de React que captura excepciones
        que ocurren en los nodos descendentes. Este podrá mostrar una interfaz alternativa
        en lugar de causar un error global en la aplicación.
      </p>
      <ErrorBoundary message="Algo ha salido mal!" onReset={onReset}>
        <Title { ...holaProps }>Hola</Title>
        <ErrorBoundary message="Algo ha salido mal en Adios!" onReset={onReset}>
          <Title { ...adiosProps }>Adios</Title>
        </ErrorBoundary>
        <p>
          <button onClick={updateHolaError}>Error en Hola</button>
          <button onClick={updateAdiosError}>Error en Adios</button>
        </p>
      </ErrorBoundary>
    </section>
  </Layout>
};

export default App;