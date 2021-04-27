import Layout from "../../../../common/components/Layout";
import List from "./components/List";

const App = () => (
  <Layout title="3.1 Fragments">
    <section aria-labelledby="title" aria-describedby="desc">
      <h3 id="title">Fragment!</h3>
      <p id="desc">
        Un <code>Fragment</code> es la mejor manera de mantener tu código HTML
        limpio. En determinados casos, como el siguiente, te permitirá incluso
        proporcionar un HTML válido.
      </p>
      <List />
    </section>
  </Layout>
);

export default App;
