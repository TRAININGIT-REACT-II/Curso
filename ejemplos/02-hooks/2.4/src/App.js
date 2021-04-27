import { useRef, useEffect } from "react";
import Counter from "./components/Counter";
import Layout from "../../../../common/components/Layout";

const App = () => {
  const inputRef = useRef(null);

  // Cuando se referencia la input, hacemos focus
  useEffect(() => {
    if (inputRef.current != null) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <Layout title="2.4 Referencias y useRef">
      <section aria-labelledby="counter" aria-describedby="counter-desc">
        <h3 id="counter">Contador</h3>
        <p id="counter-desc">
          Las referencias te permiten mantener un valor que puede mutar entre
          las renderizaciones de tu componente. Su función principal es mantener
          las referencias a elementos del DOM que React crea, aunque no es su
          única utilidad.
        </p>
        <div className="row">
          <div className="col-6 col-md-12">
            <Counter ref={inputRef} />
          </div>
          <div className="col-6 col-md-12">
            <Counter />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
