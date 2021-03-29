import Layout from "../../../common/components/Layout";
import List from "./components/List";

const App = () => (
  <Layout title="3.1 Fragments">
    <section aria-labelledby="counter" aria-describedby="counter-desc">
      <h3 id="counter">Fragment!</h3>
      <p id="counter-desc">
        Un <code>Fragment</code> es la mejor manera de mantener tu código HTML limpio.
        En determinados casos, como el siguiente, te permitirá incluso proporcionar un
        HTML válido.
      </p>
      <List />
    </section>
  </Layout>
);

export default App;