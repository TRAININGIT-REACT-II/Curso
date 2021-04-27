import Layout from "../../../../common/components/Layout";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";

const App = () => (
  <Layout title="3.5 Gestión de formularios">
    <section aria-describedby="desc">
      <p id="desc">
        En React, los formularios se pueden gestionar de dos maneras: controlada
        y sin control. Ambas tienen sus ventajas e inconvenientes y dependerá de
        cada caso de uso.
      </p>
      <section aria-labelledby="control-title">
        <h4 id="control-title">Formularios controlados</h4>
        <ControlledForm />
      </section>
      <section aria-labelledby="uncontrol-title">
        <h4 id="uncontrol-title">Formularios sin control</h4>
        <UncontrolledForm />
      </section>
    </section>
  </Layout>
);

export default App;
