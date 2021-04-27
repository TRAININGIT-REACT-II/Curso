import Layout from "../../../../common/components/Layout";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";

const App = () => (
  <Layout title="7.4 Snapshot Testing">
    <section aria-describedby="desc">
      <p id="desc">
        Snapshot testing es una técnica que te permite definir tests que
        comparan una referencia con un nuevo valor. Son muy útiles a la hora de
        detectar cambios inesperados en la interfaz
      </p>
      <section aria-labelledby="uncontrol-title">
        <h4 id="uncontrol-title">Formularios sin control</h4>
        <UncontrolledForm />
      </section>
    </section>
  </Layout>
);

export default App;
