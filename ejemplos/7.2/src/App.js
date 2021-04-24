import Layout from "../../../common/components/Layout";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";

const App = () => (
  <Layout title="7.2 Enzyme">
    <section aria-describedby="desc">
      <p id="desc">Vamos a testar este formulario con enzyme!</p>
      <section aria-labelledby="uncontrol-title">
        <h4 id="uncontrol-title">Formularios sin control</h4>
        <UncontrolledForm />
      </section>
    </section>
  </Layout>
);

export default App;
